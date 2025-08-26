# Vercel Deployment Guide

## 🚀 Deploy to Vercel

Your HR Profile Portal is now ready for Vercel deployment with serverless functions.

### Quick Deploy

#### Option 1: Deploy with Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

#### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the configuration

### What's Included

#### ✅ Serverless API Functions (`/api/`)
- **`/api/health`** - Health check endpoint
- **`/api/employee-profile`** - Employee profile data

#### ✅ Frontend (`/frontend/`)
- React application with Tailwind CSS
- Automatically builds and deploys to CDN
- Environment-aware API calls (dev vs production)

#### ✅ Configuration Files
- **`vercel.json`** - Vercel build and routing configuration
- **`.npmrc`** - npm registry configuration
- **`package.json`** - Build scripts for Vercel

### Project Structure for Vercel

```
achievers/
├── api/                    # Serverless functions
│   ├── health.py          # GET /api/health
│   └── employee-profile.py # GET /api/employee-profile
├── frontend/              # React application
│   ├── src/
│   ├── dist/             # Build output (auto-generated)
│   └── package.json
├── vercel.json           # Vercel configuration
├── package.json          # Root build configuration
└── .npmrc               # npm configuration
```

### Environment Variables

For production, you can set environment variables in the Vercel dashboard:

- `NODE_ENV` - Automatically set to "production"
- Add any custom variables as needed

### Deployment URLs

After deployment:
- **Frontend**: `https://your-project-name.vercel.app`
- **API Health**: `https://your-project-name.vercel.app/api/health`
- **Employee Profile**: `https://your-project-name.vercel.app/api/employee-profile`

### Local Development vs Production

- **Development**: Frontend calls `http://localhost:5001/api`
- **Production**: Frontend calls `/api` (same domain)

### Testing Your Deployment

```bash
# Test the API endpoints
curl https://your-project-name.vercel.app/api/health
curl https://your-project-name.vercel.app/api/employee-profile

# Visit the frontend
open https://your-project-name.vercel.app
```

### Continuous Deployment

Once connected to GitHub, Vercel automatically:
- ✅ Deploys on every push to main branch
- ✅ Creates preview deployments for pull requests
- ✅ Provides deployment status and logs

### Troubleshooting

#### Build Issues
- Check Vercel function logs in the dashboard
- Ensure all dependencies are in package.json
- Verify Python functions don't exceed size limits

#### API Issues
- Check CORS headers are properly set
- Verify serverless function syntax
- Test endpoints individually

### Next Steps

1. **Custom Domain**: Add your domain in Vercel project settings
2. **Analytics**: Enable Vercel Analytics for insights
3. **Environment Variables**: Set production environment variables
4. **Monitoring**: Set up alerts and monitoring

## 🎉 Ready to Deploy!

Your HR Profile Portal is fully configured for Vercel. Simply run:

```bash
vercel --prod
```

And your application will be live on the web! 🌐
