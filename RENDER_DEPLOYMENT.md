# HR Portal - Render Deployment Guide

This HR portal is configured for deployment on Render with a Flask backend and React frontend.

## Architecture

- **Backend**: Flask API (Python 3.11) running on port 10000
- **Frontend**: React with Vite build system
- **Deployment**: Render.com

## Render Deployment Options

### Option 1: Blueprint Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` and deploy both services

### Option 2: Manual Service Creation

#### Backend Service
1. Go to Render Dashboard
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Environment**: Python 3
   - **Region**: Oregon (or your preferred region)
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && python app.py`
   - **Plan**: Free
   - **Environment Variables**:
     - `PORT`: 10000
     - `FLASK_ENV`: production

#### Frontend Service
1. Click "New" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`
   - **Environment Variables**:
     - `VITE_API_URL`: (URL of your backend service)

## Local Development

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend
- `PORT`: 10000 (Render automatically sets this)
- `FLASK_ENV`: production

### Frontend
- `VITE_API_URL`: Your backend service URL (e.g., https://your-backend.onrender.com)

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/employee-profile` - Employee profile data

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Workday-inspired design system
- **Employee Profile**: Comprehensive employee information
- **Tabbed Interface**: Quick View, Org Chart, Personal Info
- **CORS Enabled**: Cross-origin requests supported

## Troubleshooting

### Build Issues
- Ensure Python 3.11 is specified in Render
- Check that all dependencies are in requirements.txt
- Verify build commands match your project structure

### Runtime Issues
- Check Render logs for detailed error messages
- Verify environment variables are set correctly
- Ensure the backend health check endpoint responds

### CORS Issues
- The backend includes CORS headers for cross-origin requests
- Frontend automatically detects production vs development API URLs

## Support

For deployment issues, check the Render logs and ensure:
1. All files are committed to your repository
2. Build commands are correct
3. Environment variables are set
4. Health check endpoint is responding
