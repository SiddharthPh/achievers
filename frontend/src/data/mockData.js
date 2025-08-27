// Mock employee data for frontend-only application
export const mockEmployeeData = {
  id: "EMP001",
  firstName: "Sarah",
  lastName: "Johnson",
  email: "sarah.johnson@company.com",
  phone: "+1 (555) 123-4567",
  position: "Senior Software Engineer",
  department: "Engineering",
  manager: "Mike Chen",
  startDate: "2021-03-15",
  employeeId: "E12345",
  location: "San Francisco, CA",
  status: "Active",
  profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  
  // Personal Information
  personalInfo: {
    dateOfBirth: "1992-07-20",
    address: {
      street: "123 Market Street, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    emergencyContact: {
      name: "John Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543"
    },
    citizenship: "US Citizen"
  },

  // Organizational Information
  orgInfo: {
    reportsTo: {
      name: "Mike Chen",
      title: "Engineering Manager",
      email: "mike.chen@company.com"
    },
    directReports: [
      {
        name: "Alex Rodriguez",
        title: "Software Engineer",
        email: "alex.rodriguez@company.com"
      },
      {
        name: "Emily Zhang",
        title: "Junior Software Engineer", 
        email: "emily.zhang@company.com"
      }
    ],
    team: "Platform Engineering",
    costCenter: "ENG-001",
    workLocation: "Hybrid"
  },

  // Employment Details
  employment: {
    employmentType: "Full-time",
    workSchedule: "Monday - Friday, 9:00 AM - 6:00 PM",
    salary: {
      amount: 145000,
      currency: "USD",
      frequency: "Annual"
    },
    benefits: [
      "Health Insurance",
      "Dental Insurance", 
      "Vision Insurance",
      "401(k) with Company Match",
      "Unlimited PTO",
      "Stock Options"
    ],
    nextReviewDate: "2024-03-15"
  },

  // Skills and Certifications
  skills: [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes"
  ],
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      dateEarned: "2023-06-15",
      expirationDate: "2026-06-15"
    }
  ]
};
