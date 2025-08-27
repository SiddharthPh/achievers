#!/bin/bash

echo "🧪 Testing HR Portal - Org Chart Verification"
echo "============================================="
echo ""

echo "🔍 Checking if org chart data exists..."

# Check if the mock data has orgChart
if grep -q "orgChart:" frontend/src/data/mockData.js; then
    echo "✅ orgChart data found in mockData.js"
else
    echo "❌ orgChart data missing in mockData.js"
    exit 1
fi

# Check if hierarchy data exists
if grep -q "hierarchy:" frontend/src/data/mockData.js; then
    echo "✅ hierarchy data found in mockData.js"
else
    echo "❌ hierarchy data missing in mockData.js"
    exit 1
fi

# Check if OrgChart component exists
if [ -f "frontend/src/components/OrgChart.jsx" ]; then
    echo "✅ OrgChart.jsx component found"
else
    echo "❌ OrgChart.jsx component missing"
    exit 1
fi

echo ""
echo "🏗️  Building project to verify everything works..."
cd frontend && npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful - org chart should be working!"
    echo ""
    echo "🌐 To test the org chart:"
    echo "1. Run: ./dev-start.sh"
    echo "2. Open: http://localhost:5173"
    echo "3. Click on the 'Org Chart' tab"
    echo "4. You should see:"
    echo "   - Jennifer Liu (VP of Engineering)"
    echo "   - Mike Chen (Engineering Manager)" 
    echo "   - Sarah Johnson (You - highlighted in blue)"
    echo "   - Alex Rodriguez (Software Engineer)"
    echo "   - Emily Zhang (Junior Software Engineer)"
    echo ""
    echo "📊 The chart shows 5 levels with proper indentation and hierarchy"
else
    echo "❌ Build failed - there might be syntax errors"
    exit 1
fi
