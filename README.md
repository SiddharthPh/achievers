# HR Profile Portal

A full-stack HR profile portal similar to iHawk or Workday for internal employee viewing.

## 🧱 Tech Stack

- **Backend**: Flask (Python 3.13+), REST API
- **Frontend**: React (Vite), Tailwind CSS
- **Architecture**: Monorepo layout with `frontend/` and `backend/` folders
- **Communication**: CORS-enabled JSON API

## 🎯 Features

- Employee profile endpoint `/api/employee-profile` with static profile data
- React frontend with responsive design displaying:
  - Profile picture and basic info
  - Name, title, manager, and team information
  - Tabbed interface: "Quick View", "Org Chart", "Personal Info"
- Workday-inspired UI styling with Tailwind CSS
- Mobile and desktop responsive layout

## 🚀 Quick Start

### Prerequisites

- Python 3.13+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

The backend will start on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📁 Project Structure

```
achievers/
├── backend/
│   ├── app.py              # Flask application
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Tailwind CSS imports
│   ├── package.json       # Node.js dependencies
│   └── tailwind.config.js # Tailwind configuration
├── .gitignore
└── README.md
```

## 🛠 Development

### Backend API Endpoints

- `GET /api/health` - Health check
- `GET /api/employee-profile` - Get employee profile data
- `GET /api/employee-profile/{id}` - Get specific employee by ID

### Frontend Components

- **Header**: Navigation and branding
- **ProfileCard**: Employee profile sidebar
- **TabNavigation**: Tab switching interface
- **QuickView**: Contact info and quick actions
- **OrgChart**: Organizational hierarchy view
- **PersonalInfo**: Personal details and skills

### Running in Development

1. Start the backend:
   ```bash
   cd backend && source venv/bin/activate && python app.py
   ```

2. Start the frontend:
   ```bash
   cd frontend && npm run dev
   ```

3. Visit `http://localhost:5173` to view the application

## 🎨 Styling

The application uses Tailwind CSS with a custom Workday-inspired color palette:

- Primary Blue: `#0073e6`
- Light Blue: `#e6f3ff`
- Background Gray: `#f5f5f5`

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface elements
- Optimized for screens from 320px to 1920px+

## 🔮 Future Extensions

This is a core scaffold ready for extensions:

- User authentication and authorization
- Real database integration (PostgreSQL, MongoDB)
- Advanced org chart visualizations
- Employee directory and search
- Performance reviews and feedback
- Time tracking and PTO management
- Notifications and messaging system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is intended for internal use and demonstration purposes.