# Project Phase 1 - Definition and planning

ExpenseWise 

**Phase 1 – Definition and Planning**

---

### 1. User Personas (Based on Expense Management System)

**Persona 1: Alisha Rai – Young Professional**
- **Age**: 26
- **Profession**: Marketing Executive
- **Location**: Kathmandu, Nepal
- **Tech Comfort**: High
- **Goals**:
  - Track monthly bills and daily expenses
  - Get visual reports of where her salary goes
- **Pain Points**:
  - Time-consuming manual tracking
  - Wants a mobile-responsive app
- **Expectations**:
  - Clean dashboard
  - Fast, secure login
  - Easy-to-use charts

**Persona 2: Prakash Bhandari – Small Business Owner**
- **Age**: 38
- **Business**: Local Grocery Store
- **Location**: Pokhara, Nepal
- **Tech Comfort**: Medium
- **Goals**:
  - Track store and personal expenses separately
  - Generate expense reports monthly for accounting
- **Pain Points**:
  - Needs access control for staff
  - Needs to attach scanned receipts
- **Expectations**:
  - Role-based access
  - Report generation by date/category

**Persona 3: Sneha Shrestha – Student**
- **Age**: 21
- **Education**: BBA Student
- **Location**: Lalitpur, Nepal
- **Tech Comfort**: High
- **Goals**:
  - Track daily lunch, transport, and stationery expenses
  - Learn budgeting through insights
- **Pain Points**:
  - No previous habit of tracking money
- **Expectations**:
  - Intuitive design
  - Color-coded categories

---

### 2. Use Cases and User Flows

**Use Case 1: User Authentication**
- **Flow**:
  1. User visits login/signup page
  2. Enters credentials or signs up with email
  3. Backend validates and returns JWT token
  4. Token stored in localStorage
  5. Redirected to personal dashboard

**Use Case 2: Expense Management**
- **Flow**:
  1. User clicks "Add Expense"
  2. Inputs amount, category, date, description, receipt (optional)
  3. Frontend sends data to API
  4. MongoDB stores expense entry under user ID

**Use Case 3: Category Management**
- **Flow**:
  1. User opens "Manage Categories"
  2. Can add/edit/delete categories
  3. Changes are synced with backend via Express.js API

**Use Case 4: View Dashboard & Reports**
- **Flow**:
  1. User selects date range or category filter
  2. React frontend fetches data from REST API
  3. Charts (pie/bar) are generated using libraries
  4. User can export summary as PDF/CSV (future scope)

---

### 3. UI Prototypes (Structure and Philosophy)

**Pages:**
- **Auth Pages**: Login, Signup, Forgot Password
- **Main Pages**:
  - Dashboard
  - Expense Tracker
  - Category Management
  - Reports
  - Settings

**Component Highlights**:
- Responsive layout (Bootstrap Grid)
- Material Icons for UI clarity
- `tsparticles` for animated backgrounds
- `react-datepicker`, `moment.js` for date management
- Use of `Redux` for global state (user session, expense list, etc.)

**UI Guidelines**:
- Light/dark mode support
- Use of charts for quick insights
- One-click export/download (future enhancement)
- Mobile-first responsive layout

---

### 4. Information Architecture and Technical Design

**Frontend (React + Redux)**:
- `React Router`: Page navigation
- `Redux`: Global state management
- `Axios`: API integration
- `Bootstrap` & `Material Icons`: Styling

**Backend (Node.js + Express.js)**:
- RESTful API architecture
- JWT for secure login/authentication
- Role-based access using middleware
- `dotenv`, `bcrypt`, `cors` for environment, security

**Database (MongoDB via Mongoose)**:

**Users Collection**:
- _id (ObjectId)
- name
- email (unique)
- password (hashed)
- role ("user" or "admin")

**Expenses Collection**:
- _id
- user_id (ref: User)
- amount
- category
- description
- date
- receipt_url (optional)

**Categories Collection**:
- _id
- user_id (ref: User)
- category_name
- icon/color

**Security Measures**:
- JWT tokens in HTTP-only cookies or headers
- Input validation with Mongoose schema constraints
- Protected API routes

---

### 5. Project Management and User Testing

**Development Workflow**:
- GitHub for version control
- Issues for bugs/features
- Branching model: `main`, `dev`, `feature/*`

**CI/CD Setup**:
- Frontend hosted on **AWS**
- Backend on **Render**
- Auto-deploy on push via GitHub Actions (CI pipeline)

**Sprint Plan**:
- **Week 1**: UI layout, basic routing, backend scaffolding
- **Week 2**: Auth module, MongoDB setup, user dashboard
- **Week 3**: Expense/category CRUD APIs + frontend forms
- **Week 4**: Reporting module, charts, UI polish
- **Week 5**: Testing, bug fixes, deployment

**User Testing Strategy**:
- Initial testing with 3 real users from each persona
- Feedback gathered on:
  - Speed of adding expenses
  - Usefulness of reports
  - Clarity of UI
- Tools: Google Forms, direct interviews

**Metrics Collected**:
- Time to add 5 expenses
- Ability to filter by category/date
- Satisfaction score



