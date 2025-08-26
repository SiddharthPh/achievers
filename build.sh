#!/bin/bash

# Build script for Render deployment

echo "Starting Render build process..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
pip install -r requirements.txt
cd ..

# Install frontend dependencies and build
echo "Installing frontend dependencies..."
cd frontend
npm install

# Build frontend for production
echo "Building frontend..."
npm run build

echo "Build complete!"
