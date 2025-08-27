# HR Profile Portal

A modern, responsive HR profile portal inspired by Workday and iHawk, built with React and deployed on Vercel.

## 🎯 Features

- **Employee Profile View**: Comprehensive employee information display
- **Modern Design**: Workday-inspired UI with Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Tabbed Interface**: Organized sections for Quick View, Org Chart, and Personal Info
- **Mock Data**: Realistic employee data for demonstration
- **Frontend-Only**: No backend required - perfect for static deployment

## 🛠️ Technology Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 3.4
- **Icons**: Heroicons
- **Deployment**: Vercel
- **Data**: Mock employee data (no API required)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup
```bash
# Clone the repository
git clone https://github.com/SiddharthPh/achievers.git
cd achievers

# Run setup script
./setup.sh

# Start development server
./dev-start.sh
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx
│   │   │   ├── ProfileCard.jsx
│   │   │   ├── TabNavigation.jsx
│   │   │   ├── QuickView.jsx
│   │   │   ├── OrgChart.jsx
│   │   │   └── PersonalInfo.jsx
│   │   ├── data/
│   │   │   └── mockData.js  # Employee mock data
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── App.jsx          # Main application
│   ├── package.json
│   └── dist/               # Build output
├── vercel.json             # Vercel configuration
├── dev-start.sh            # Development server script
├── setup.sh                # Project setup script
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Via Vercel CLI**:
```bash
npm i -g vercel
vercel login
vercel --prod
```

2. **Via GitHub Integration**:
   - Connect your GitHub repository to Vercel
   - Set root directory to `frontend`
   - Deploy automatically on push

See `VERCEL_DEPLOYMENT.md` for detailed deployment instructions.

## 🛠️ Development

### Available Scripts

```bash
# Start development server
./dev-start.sh

# Or manually:
cd frontend
npm run dev

# Build for production
npm run build
```

### Customizing Data

To modify the employee information:
1. Edit `frontend/src/data/mockData.js`
2. Update the employee object with your desired data
3. Restart the development server or rebuild

## 📞 Support

For deployment issues, see `VERCEL_DEPLOYMENT.md`

---

Built with ❤️ for modern HR teams