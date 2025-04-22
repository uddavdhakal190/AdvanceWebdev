Basic structure and main functionalities




 ### 1. Environment
- **Frontend**: React.js with `react-router-dom` for routing and `react-toastify` for notifications.
- **Backend**: Node.js with Express.js for RESTful APIs.
- **Database**: MongoDB via Mongoose for data modeling.
- **Hosting**: 
  - Frontend: Configured for deployment on Microsoft Azure Cloud and hosted initially locally at first.
  - Backend: Configured for deployment on Microsoft Azure Cloud platform and initially hosted locally.
- **Environment Variables**:
  - Frontend: .env file with `REACT_APP_API_URL`.
  - Backend: .env file with `PORT`, `MONGO_CONN`, and `JWT_SECRET`.

---

### 2. Backend
- **Framework**: Express.js.
- **Routes**:
  - `/auth`: Handles user authentication (login, signup).
  - `/expenses`: Handles expense CRUD operations (protected by JWT middleware).
  - `/products`: Example route for product data (protected by JWT middleware).
- **Middleware**:
  - Auth.js: Ensures JWT-based authentication.
  - AuthValidation.js: Validates request payloads using Joi.
- **Controllers**:
  - AuthController.js: Handles signup and login logic.
  - ExpenseController.js: Handles expense creation, retrieval, and deletion.
- **Security**:
  - Password hashing with `bcrypt`.
  - JWT for authentication.
  - Input validation with Joi.

---

### 3. Frontend
- **Framework**: React.js.
- **Routing**: `react-router-dom` for navigation.
  - Public routes: `/login`, `/signup`.
  - Private route: home (protected by authentication).
- **Components**:
  - Signup.js and Login.js: Handle user authentication.
  - Home.js: Displays user dashboard with expense tracking.
  - ExpenseForm.js: Form to add new expenses.
  - ExpenseTable.js: Displays a list of expenses.
  - ExpenseDetails.js: Shows income, expense, and balance details.
- **State Management**: Local state with React hooks.
- **Notifications**: `react-toastify` for success/error messages.

---

### 4. Database
- **Database**: MongoDB.
- **Collections**:
  - `users`: Stores user details (name, email, hashed password) and embedded `expenses`.
  - Embedded `expenses` schema:
    - `text`: Description of the expense.
    - `amount`: Amount of the expense.
    - `createdAt`: Timestamp.
- **Connection**: Managed via Mongoose (`db.js`).

---

### 5. Basic Structure and Architecture
- **Frontend**:
  - Organized into `src/pages` for React components and utils.js for utility functions.
  - index.js initializes the app with React Router.
- **Backend**:
  - Modular structure with separate folders for `Routes`, `Controllers`, `Models`, and `Middlewares`.
  - Centralized entry point (`index.js`) for API setup.
- **Architecture**:
  - RESTful API design.
  - JWT-based authentication for secure access.
  - Separation of concerns between routes, controllers, and middleware.

---

### 6. Functionalities
- **Authentication**:
  - User signup and login with validation and JWT-based authentication.
- **Expense Management**:
  - Add, view, and delete expenses.
  - Calculate income, expenses, and balance.
- **Protected Routes**:
  - Backend routes and frontend pages are secured with JWT and React Router.
- **Notifications**:
  - Success and error messages displayed using `react-toastify`.

---

### 7. Code Quality and Documentation
- **Code Quality**:
  - Clean and modular code structure.
  - Use of modern JavaScript features (e.g., async/await, destructuring).
- **Documentation**:
  - Minimal inline comments in the code.
  - Backend routes and middleware are self-explanatory.
  - Frontend components are straightforward but lack detailed comments.

---

### 8. Testing and Error Handling
- **Testing**:
  - Basic test setup with Jest (`App.test.js`).
  - Limited test coverage (only a placeholder test for the App component).
- **Error Handling**:
  - Backend: Proper error responses for validation errors, authentication failures, and server errors.
  - Frontend: Error messages displayed using `react-toastify`.

---

### 9. User Interface and Interaction
- **UI Design**:
  - Minimalistic and responsive design.
  - Styled with CSS (`index.css`).
- **Interaction**:
  - Forms for login, signup, and adding expenses.
  - Buttons for logout and deleting expenses.
  - Real-time updates for income, expenses, and balance.
- **User Feedback**:
  - Notifications for success and error events.
  - Console logs for debugging purposes.
