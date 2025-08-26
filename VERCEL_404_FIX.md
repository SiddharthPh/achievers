# Vercel 404 Troubleshooting Guide

## 🔍 Diagnosing the 404 NOT_FOUND Error

The 404 error typically indicates routing or build issues. Here are the steps to fix it:

### Step 1: Check Deployment Logs

In Vercel dashboard:
1. Go to your project
2. Click on the failed deployment
3. Check the "Build Logs" and "Function Logs"

### Step 2: Try Alternative Configurations

#### Option A: Use Simplified Config
```bash
# Use the simpler configuration
mv vercel.json vercel-original.json
mv vercel-simple.json vercel.json
vercel --prod
```

#### Option B: Manual Static Deployment
```bash
# Build locally and deploy as static
cd frontend
npm run build
cd ..
npx vercel --prod ./frontend/dist
```

### Step 3: Test API Functions Individually

Test if the issue is with API functions:

```bash
# Test health endpoint
curl https://your-project-name.vercel.app/api/health

# Test employee profile endpoint  
curl https://your-project-name.vercel.app/api/employee-profile
```

### Step 4: Deploy Frontend Only First

Deploy just the frontend to isolate issues:

```bash
# Deploy only frontend
cd frontend
npx vercel --prod
```

### Step 5: Check File Structure

Ensure your file structure matches:
```
achievers/
├── api/
│   ├── health.py
│   └── employee-profile.py
├── frontend/
│   ├── dist/ (after build)
│   └── package.json
└── vercel.json
```

### Step 6: Alternative Deployment

If all else fails, deploy via GitHub:

1. Push latest changes: `git push origin main`
2. Go to Vercel dashboard
3. Import from GitHub
4. Let Vercel auto-configure

### Quick Fix Commands

Try these in order:

```bash
# 1. Redeploy with current config
vercel --prod --force

# 2. Use simplified config
mv vercel.json vercel-backup.json
mv vercel-simple.json vercel.json
vercel --prod

# 3. Deploy frontend only
cd frontend && npx vercel --prod

# 4. Deploy with prebuilt assets
cd frontend && npm run build && cd .. && vercel --prod --prebuilt
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| API functions not found | Check `api/*.py` file structure |
| Frontend not loading | Verify build output in `frontend/dist/` |
| Routing errors | Update `vercel.json` routes section |
| Build failures | Check build logs for npm/Python errors |

### Debug Mode

For detailed debugging:

```bash
# Enable debug mode
DEBUG=1 vercel --prod

# Check function logs
vercel logs your-deployment-url
```

The 404 error should be resolved with one of these approaches!
