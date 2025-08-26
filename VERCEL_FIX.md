# Quick Vercel Fix for npm Authentication Issues

## Issue
The npm E401 error is likely due to authentication issues with private npm registries or cached credentials.

## Solution 1: Manual Build + Deploy

Instead of letting Vercel handle the build, pre-build locally and deploy:

```bash
# 1. Build locally
cd frontend
npm install
npm run build
cd ..

# 2. Deploy with pre-built files
vercel --prod --prebuilt
```

## Solution 2: Use GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com/dashboard)
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Vercel will auto-detect and deploy

## Solution 3: Alternative Vercel Config

Use the simplified `vercel-alt.json`:

```bash
# Rename alternative config
mv vercel.json vercel-old.json
mv vercel-alt.json vercel.json

# Deploy
vercel --prod
```

## Solution 4: Environment Variables

If using Vercel CLI, ensure no conflicting npm auth:

```bash
# Clear npm config
npm config delete registry
npm config delete //registry.npmjs.org/:_authToken

# Deploy
vercel --prod
```

## Quick Deploy Command

Try this single command:

```bash
cd frontend && npm install && npm run build && cd .. && vercel --prod --prebuilt
```

This builds locally and deploys the pre-built files, avoiding any npm authentication issues during Vercel's build process.
