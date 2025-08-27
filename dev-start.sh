#!/bin/bash

echo "🚀 Starting HR Portal Frontend Development Server..."
echo "=============================================="

# Check if we're in the correct directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found!"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Navigate to frontend and start development server
echo "📦 Installing frontend dependencies..."
cd frontend

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    npm install
fi

echo "🌐 Starting Vite development server..."
echo "Frontend will be available at: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the frontend development server
npm run dev
