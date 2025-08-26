#!/bin/bash

echo "🔍 Vercel Deployment Readiness Check"
echo "===================================="

# Check required files
echo ""
echo "📋 Required Files:"
echo "------------------"
files=("vercel.json" "package.json" ".npmrc" "api/health.py" "api/employee-profile.py" "frontend/package.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
    fi
done

# Check API functions
echo ""
echo "🐍 API Functions:"
echo "-----------------"
if [ -d "api" ]; then
    echo "✅ /api directory exists"
    echo "   Functions: $(ls api/*.py | wc -l) Python files"
    ls api/*.py | sed 's/^/   - /'
else
    echo "❌ /api directory missing"
fi

# Check frontend build
echo ""
echo "⚛️  Frontend Build Test:"
echo "-----------------------"
if [ -f "frontend/package.json" ]; then
    echo "🔨 Testing build process..."
    cd frontend
    if npm run build >/dev/null 2>&1; then
        echo "✅ Frontend builds successfully"
        if [ -d "dist" ]; then
            echo "   - dist/ directory created"
            echo "   - Build files: $(find dist -type f | wc -l) files"
        fi
    else
        echo "❌ Frontend build failed"
    fi
    cd ..
else
    echo "❌ frontend/package.json missing"
fi

# Check Vercel configuration
echo ""
echo "⚙️  Vercel Configuration:"
echo "------------------------"
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json configured"
    if grep -q "static-build" vercel.json; then
        echo "   - Static build configured"
    fi
    if grep -q "@vercel/python" vercel.json; then
        echo "   - Python functions configured"
    fi
    if grep -q "routes" vercel.json; then
        echo "   - Routing configured"
    fi
else
    echo "❌ vercel.json missing"
fi

# Check environment setup
echo ""
echo "🌍 Environment Configuration:"
echo "-----------------------------"
if grep -q "NODE_ENV" frontend/src/App.jsx; then
    echo "✅ Environment-aware API calls"
else
    echo "❌ Missing environment-aware API configuration"
fi

echo ""
echo "🚀 Deployment Instructions:"
echo "---------------------------"
echo "1. Install Vercel CLI: npm i -g vercel"
echo "2. Login to Vercel: vercel login"
echo "3. Deploy: vercel --prod"
echo ""
echo "📖 Full guide: See VERCEL_DEPLOYMENT.md"
echo ""

if [ -f "vercel.json" ] && [ -f "api/health.py" ] && [ -f "api/employee-profile.py" ]; then
    echo "🎉 Ready for Vercel deployment!"
else
    echo "⚠️  Some files missing - check above for details"
fi
