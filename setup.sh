#!/bin/bash

# HR Profile Portal Setup Script
echo "🚀 Setting up HR Profile Portal..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3.13+ and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js 18+ and try again."
    exit 1
fi

echo "✅ Python and Node.js found"

# Setup backend
echo "📦 Setting up backend dependencies..."
cd backend
if [ -f "requirements.txt" ]; then
    echo "🐍 Creating Python virtual environment..."
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    if [ $? -eq 0 ]; then
        echo "✅ Backend dependencies installed successfully"
    else
        echo "❌ Failed to install backend dependencies"
        exit 1
    fi
else
    echo "❌ requirements.txt not found in backend directory"
    exit 1
fi

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
