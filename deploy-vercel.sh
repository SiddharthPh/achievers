#!/bin/bash

echo "🚀 HR Portal - Vercel Deployment"
echo "================================="
echo ""

echo "📋 Pre-deployment Checklist:"
echo "✅ Code pushed to GitHub"
echo "✅ Frontend builds successfully"
echo "✅ Mock data is working"
echo ""

echo "🔧 Deployment Options:"
echo ""
echo "Option 1: Vercel CLI (Quick)"
echo "==========================="
echo "1. Install: npm i -g vercel"
echo "2. Login: vercel login"
echo "3. Deploy: vercel --prod"
echo ""

echo "Option 2: GitHub Integration (Automatic)"
echo "========================================"
echo "1. Go to https://vercel.com"
echo "2. Click 'New Project'"
echo "3. Import from GitHub: SiddharthPh/achievers"
echo "4. Configure:"
echo "   - Framework: Vite"
echo "   - Root Directory: frontend"
echo "   - Build Command: npm run build"
echo "   - Output Directory: dist"
echo "5. Deploy!"
echo ""

echo "📊 Expected Result:"
echo "🔗 Your app will be live at: https://achievers.vercel.app"
echo ""

echo "🧪 Test Locally First:"
echo "cd frontend && npm run build && npm run preview"
echo ""

echo "📖 Full instructions: VERCEL_DEPLOYMENT.md"
