from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        # Same employee data as Flask backend
        employee_data = {
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
        
        self.wfile.write(json.dumps(employee_data).encode())
        return

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        return
