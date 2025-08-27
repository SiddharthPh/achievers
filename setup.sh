#!/bin/bash

# HR Profile Portal Setup Script (Frontend Only)
echo "🚀 Setting up HR Profile Portal Frontend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js 18+ and try again."
    exit 1
fi

echo "✅ Node.js found"

# Setup frontend
echo "📦 Setting up frontend dependencies..."
cd frontend
if [ -f "package.json" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Frontend dependencies installed successfully"
    else
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
else
    echo "❌ package.json not found in frontend directory"
    exit 1
fi

# Build the project to verify everything works
echo "🔨 Building project to verify setup..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete! Frontend-only HR Portal is ready."
echo ""
echo "📝 Next steps:"
echo "1. Run './dev-start.sh' to start the development server"
echo "2. Open http://localhost:5173 in your browser"
echo "3. Deploy to Vercel when ready!"
echo ""
echo "📖 For deployment instructions, see VERCEL_DEPLOYMENT.md"

# Setup frontend
echo "📦 Setting up frontend dependencies..."
cd ../frontend
if [ -f "package.json" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Frontend dependencies installed successfully"
    else
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
else
    echo "❌ package.json not found in frontend directory"
    exit 1
fi

cd ..

echo ""
echo "🎉 Setup complete! To start the application:"
echo ""
echo "1. Start the backend (in one terminal):"
echo "   cd backend && source venv/bin/activate && python app.py"
echo ""
echo "2. Start the frontend (in another terminal):"
echo "   cd frontend && npm run dev"
echo ""
echo "3. Visit http://localhost:5173 in your browser"
echo ""
echo "📚 Check README.md for detailed documentation"
