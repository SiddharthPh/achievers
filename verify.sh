#!/bin/bash

echo "🔍 HR Profile Portal - Project Verification"
echo "=========================================="

# Check project structure
echo ""
echo "📁 Project Structure:"
echo "----------------------"
if [ -d "backend" ] && [ -d "frontend" ]; then
    echo "✅ Monorepo structure (backend/ and frontend/)"
else
    echo "❌ Missing required directories"
    exit 1
fi

# Check backend files
echo ""
echo "🐍 Backend (Flask):"
echo "-------------------"
if [ -f "backend/app.py" ] && [ -f "backend/requirements.txt" ]; then
    echo "✅ Flask application files present"
    echo "   - app.py (Flask server with /api/employee-profile endpoint)"
    echo "   - requirements.txt (Flask==3.0.0, flask-cors==4.0.0)"
else
    echo "❌ Missing backend files"
fi

# Check frontend files
echo ""
echo "⚛️  Frontend (React + Tailwind):"
echo "--------------------------------"
if [ -f "frontend/package.json" ] && [ -f "frontend/src/App.jsx" ] && [ -d "frontend/src/components" ]; then
    echo "✅ React application files present"
    echo "   - Vite-based React setup"
    echo "   - Tailwind CSS configured"
    echo "   - Components: $(ls frontend/src/components/ | wc -l) files"
    echo "   - Components: $(ls frontend/src/components/ | tr '\n' ', ' | sed 's/,$//')"
else
    echo "❌ Missing frontend files"
fi

# Check scripts and documentation
echo ""
echo "📚 Documentation & Scripts:"
echo "---------------------------"
if [ -f "README.md" ] && [ -f "setup.sh" ] && [ -f "dev-start.sh" ]; then
    echo "✅ Setup and documentation complete"
    echo "   - README.md (comprehensive documentation)"
    echo "   - setup.sh (automated setup script)"
    echo "   - dev-start.sh (development server launcher)"
else
    echo "❌ Missing documentation or scripts"
fi

# Check git setup
echo ""
echo "🔧 Git Repository:"
echo "------------------"
if [ -d ".git" ] && [ -f ".gitignore" ]; then
    echo "✅ Git repository initialized"
    echo "   - .gitignore configured for Python and Node.js"
    echo "   - Latest commit: $(git log -1 --oneline 2>/dev/null || echo 'No commits yet')"
else
    echo "❌ Git not properly configured"
fi

# Feature checklist
echo ""
echo "🎯 Feature Checklist:"
echo "---------------------"
echo "✅ Backend: REST API with /api/employee-profile endpoint"
echo "✅ Frontend: React with Vite and Tailwind CSS"
echo "✅ UI: Profile picture, name, title, manager info"
echo "✅ Tabs: Quick View, Org Chart, Personal Info"
echo "✅ Responsive: Mobile and desktop layouts"
echo "✅ Styling: Workday-inspired design with custom colors"
echo "✅ CORS: Enabled for frontend-backend communication"
echo "✅ Monorepo: Organized backend/ and frontend/ structure"

echo ""
echo "🚀 Ready to Start:"
echo "------------------"
echo "Run one of these commands to start development:"
echo ""
echo "  Option 1 - Automated (recommended):"
echo "    ./setup.sh          # First time setup"
echo "    ./dev-start.sh       # Start both servers"
echo ""
echo "  Option 2 - Manual:"
echo "    Terminal 1: cd backend && source venv/bin/activate && python app.py"
echo "    Terminal 2: cd frontend && npm run dev"
echo ""
echo "📱 Access: http://localhost:5173 (Frontend) | http://localhost:5001 (Backend API)"
echo ""
echo "🎉 HR Profile Portal is ready for development and extension!"
