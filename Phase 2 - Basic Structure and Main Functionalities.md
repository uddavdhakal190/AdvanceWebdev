Phase 2 - Basic Structure and Main Functionalities

1. Environment Setup
Frontend
Framework: React.js

Routing: react-router-dom

Notifications: react-toastify

Environment Variables:

.env:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Backend
Framework: Node.js with Express.js

Environment Variables:

.env:

env
Copy
Edit
PORT=5000
MONGO_CONN=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_jwt_secret_key
Database
Database: MongoDB

ODM: Mongoose

Hosting
Configured for deployment on:

Localhost

Microsoft Azure Cloud Platform

2. Backend Architecture
Framework
Express.js

Routes
/auth: User authentication (login, signup)

/expenses: CRUD operations for expenses (JWT protected)

/products: Sample protected route

Middleware
Auth.js: JWT-based route protection

AuthValidation.js: Request payload validation using Joi

Controllers
AuthController.js: Handles user signup and login logic

ExpenseController.js: Manages expense creation, retrieval, and deletion

Security
Password hashing using bcrypt

Authentication via JWT

Input validation with Joi

3. Frontend Architecture
Framework
React.js

Routing
react-router-dom for navigation

Routes
Public: /login, /signup

Private: /home (JWT protected)

Components
Signup.js, Login.js: Authentication forms

Home.js: User dashboard with expenses overview

ExpenseForm.js: Add new expense

ExpenseTable.js: List all expenses

ExpenseDetails.js: Display total income, expenses, and balance

State Management
React Hooks (local state)

Notifications
react-toastify for user feedback on actions

4. Database Structure
MongoDB Collections
users

name: String

email: String

password: Hashed string

expenses (embedded schema):

text: Description

amount: Number

createdAt: Date

Mongoose
DB connection managed via db.js

5. Project Structure and Architecture
Frontend
bash
Copy
Edit
src/
├── pages/             # Component pages
├── utils.js           # Utility functions
└── index.js           # App initialization with Router
Backend
graphql
Copy
Edit
server/
├── controllers/       # Request logic
├── models/            # Mongoose schemas
├── routes/            # API routes
├── middlewares/       # Auth and validation
└── index.js           # API server entry point
Design Principles
RESTful API structure

JWT authentication

Separation of concerns (routes, controllers, middleware)

6. Core Functionalities
Authentication
User registration and login

JWT-based session management

Joi validation on inputs

Expense Management
Create, read, and delete expenses

Real-time calculations: total income, total expenses, and current balance

Route Protection
Backend: JWT middleware

Frontend: Protected routes using React Router

Notifications
User-friendly success and error messages using react-toastify

7. Code Quality & Documentation
Code Practices
Clean and modular codebase

Use of modern ES6+ features: async/await, destructuring, arrow functions

Documentation
Minimal inline comments

Self-explanatory function and file naming

Clearly organized folder structure

8. Testing & Error Handling
Testing
Basic setup using Jest

Placeholder test for App component (App.test.js)

Error Handling
Backend: Standardized error responses (400, 401, 500)

Frontend: Error display via react-toastify

9. User Interface & Interaction
UI Design
Minimalistic and responsive design

CSS used for styling (index.css)

User Interaction
Login, signup, and expense submission forms

Action buttons for logout and expense deletion

Real-time financial summaries

User Feedback
Toast notifications for all user actions

Console logs for development/debugging 


