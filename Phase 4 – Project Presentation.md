 📝 Project Overview
 
Expense Tracker is a web application designed to help users manage their personal finances effectively. The application allows users to track their income and expenses, view transaction history, and manage their financial records in a user-friendly interface.

Target Users:

Individuals looking to track personal expenses
People who want to manage their daily financial transactions
Users who need a simple, intuitive way to monitor their spending habits

Context:
The application was developed as part of the Advanced Web Development course, demonstrating the implementation of a full-stack MERN application with modern web development practices.

📌 Use Case Summary

| Use Case | Implemented | Demonstration / Notes |
|----------|-------------|----------------------|
| User Registration | Yes | Implemented with email validation and password hashing |
| User Login | Yes | Secure authentication using JWT |
| Add Transaction | Yes | Form validation and real-time updates |
| Edit Transaction | Yes | Inline editing with immediate database updates |
| Delete Transaction | Yes | Confirmation dialog and instant UI update |
| View Transaction History | Yes | Paginated list with filtering options |
| Protected Routes | Yes | JWT-based route protection |
| Responsive Design | Yes | Works on desktop and mobile devices |
| Dark Mode/Light Mode | No | In next update |
| Export to Excel | No | In next update |

✍️ Technical Implementation

Technologies Used:

Frontend:

React.js for UI components
Redux for state management
Ant Design for UI components
Axios for API calls

Backend:

Node.js & Express.js
MongoDB with Mongoose
JWT for authentication
bcryptjs for password hashing

Development Tools:

Git for version control 
npm for package management 
Render for deployment 

🚂 Development Process

Phase 1: Planning and Setup

Defined project requirements
Set up development environment
Created initial project structure

Phase 2: Core Development

Implemented user authentication
Created transaction management system
Developed UI components

Phase 3: Testing and Deployment

Fixed CORS issues
Implemented error handling
Deployed to Render

Key Decisions

Architecture:
Chose MERN stack for full-stack development
Implemented Redux for state management
Used Ant Design for consistent UI

Security:
Implemented JWT authentication
Added password hashing
Configured CORS properly

☀️ Reflection and Future Work

What Worked Well:

User Interface:
Clean and intuitive design
Responsive layout
Smooth user experience

Technical Implementation:
Secure authentication
Efficient data management
Good error handling

Challenges Faced:

CORS Configuration:
Initially had issues with cross-origin requests
Resolved by proper CORS setup and axios configuration

Deployment:
Faced path-to-regexp error
Solved by updating dependencies and configuration

Future Improvements:

Features to Add:
Data visualization (charts and graphs)
Export functionality (PDF/Excel)
Budget planning tools
Category management
Multi-currency support

Technical Improvements:
Add unit tests
Implement real-time updates
Add offline support
Improve performance optimization
Add more security features

User Experience:
Add dark mode
Implement more filtering options
Add search functionality
Improve mobile responsiveness

This project successfully demonstrates the implementation of a full-stack web application with modern technologies and best practices. The experience gained in handling authentication, data management, and deployment will be valuable for future projects.

Work Hours Log

| Date  | Used hours | Subject(s) |  Outcome |
| :---  |     :---:      |     :---:      |     :---:      |
| 4.8.2025  | 7  | Planning the phase 1    | Phase 1 started  |
| 4.10.2025 | 4  | Planning the phase 1    | Phase 1 completed  |
| 4.15.2025 | 6  | Planning the phase 2    | Phase 2 initiated  |
| 4.19.2025 | 8  | Working on backend      | Phase 2 work in progress  |
| 4.24.2025 | 7  | Working on frontend     | Phase 2 work in progress  |
| 4.28.2025 | 5  | Database implementation | Phase 2 nearly complete  |
| 4.30.2025 | 9  | Debugging               | Bug fixes  |
| 5.02.2025 | 7  | API errors and fixed    | Phase 2 completed  |
| 5.06.2025 | 3  | Some improvement in UI  | Phase 3 work in progress |
| 5.09.2025 | 2  | Some bug fixed          | Phase 3 completed  |
| 5.12.2025 | 4  | Planning the phase 4    | Phase 4 started and implemented |
| 5.15.2025 | 4  | Completion of phase 4   | Final Phase completed  |
|                    Total Hours                 |  66 |


