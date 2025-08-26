from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Sample employee data - in a real app this would come from a database
EMPLOYEE_DATA = {
    "id": "emp001",
    "name": "Sarah Johnson",
    "title": "Senior Software Engineer",
    "department": "Engineering",
    "manager": {
        "name": "Michael Chen",
        "title": "Engineering Manager",
        "email": "michael.chen@company.com"
    },
    "team": "Platform Engineering",
    "email": "sarah.johnson@company.com",
    "phone": "+1 (555) 123-4567",
    "office": "San Francisco, CA",
    "startDate": "2022-03-15",
    "employeeId": "EMP-001",
    "profilePicture": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    "directReports": [
        {
            "name": "Alex Rodriguez",
            "title": "Software Engineer",
            "email": "alex.rodriguez@company.com"
        },
        {
            "name": "Emily Davis",
            "title": "Software Engineer",
            "email": "emily.davis@company.com"
        }
    ],
    "orgChart": {
        "level": 2,
        "hierarchy": [
            {
                "name": "Jennifer Wilson",
                "title": "VP of Engineering",
                "level": 0
            },
            {
                "name": "Michael Chen",
                "title": "Engineering Manager",
                "level": 1
            },
            {
                "name": "Sarah Johnson",
                "title": "Senior Software Engineer",
                "level": 2,
                "current": True
            }
        ]
    },
    "personalInfo": {
        "birthday": "April 15",
        "workLocation": "Hybrid",
        "timeZone": "PST",
        "skills": ["Python", "React", "AWS", "Docker", "Kubernetes"],
        "certifications": ["AWS Solutions Architect", "Scrum Master"],
        "bio": "Passionate full-stack engineer with 6+ years of experience building scalable web applications. Love mentoring junior developers and contributing to open source projects."
    }
}

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "service": "HR Portal API"})

@app.route('/api/employee-profile', methods=['GET'])
def get_employee_profile():
    """Get employee profile data"""
    return jsonify(EMPLOYEE_DATA)

@app.route('/api/employee-profile/<employee_id>', methods=['GET'])
def get_employee_by_id(employee_id):
    """Get specific employee profile by ID"""
    # In a real app, you'd query the database by employee_id
    if employee_id == "emp001":
        return jsonify(EMPLOYEE_DATA)
    else:
        return jsonify({"error": "Employee not found"}), 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
