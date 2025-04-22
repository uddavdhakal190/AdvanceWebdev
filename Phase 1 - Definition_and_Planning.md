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

**1. User Registers an Account (Authentication)**

Actors: User, System

Preconditions: User does not have an account.

Flow of Events:

User navigates to the registration page.

User inputs email, name, and password.

System validates inputs and checks for existing email.

If valid, system creates an account and stores encrypted password.

User receives a confirmation email and can now log in.

Outcome: User successfully registers and can start using the app.


**2. User Adds a New Expense (Data Entry)**

Actors: User, System

Preconditions: User must be logged in.

Flow of Events:

User clicks on the "Add Expense" button.

User enters amount, category, date, and optional notes.

System validates and stores expense in the database.

System updates total spending and displays the new entry.

Outcome: Expense is successfully added and visible in the dashboard.


**3. User Views Expense Reports (Data Visualization)**

Actors: User, System

Preconditions: User has recorded expenses.

Flow of Events:

User navigates to the "Reports" section.

System fetches and categorizes expense data.

System generates graphs and statistics (e.g., pie chart of spending by category).

User can filter by date range, category, or custom tags.

Outcome: User gains insights into spending patterns through graphical reports.


**4. User Sets a Budget and Gets Alerts (Budgeting Feature)**

Actors: User, System

Preconditions: User must be logged in and have recorded expenses.

Flow of Events:

User navigates to "Settings" and sets a monthly budget.

System stores the budget limit and tracks spending against it.

When expenses reach 80% of the budget, the system sends a warning.

If expenses exceed 100%, the system sends an alert.

Outcome: User is notified when approaching or exceeding budget limits.


**5. User Exports Transactions as PDF (Data Exporting)**

Actors: User, System

Preconditions: User must be logged in and have recorded expenses.

Flow of Events:

User goes to "Export Data" section.

User selects a date range and exports PDF.

System generates the file and provides a download link.

Outcome: User successfully downloads an expense report for offline use.



## 3. UI Prototypes

https://www.figma.com/design/dkH6TaJTsI4chh4PfGUfWS/ExpenseWisePrototype?node-id=0-1&p=f&t=oEU978KnVxfwHxvH-0

https://www.figma.com/design/dkH6TaJTsI4chh4PfGUfWS/ExpenseWisePrototype?node-id=1-23&p=f&t=oEU978KnVxfwHxvH-0

https://www.figma.com/design/dkH6TaJTsI4chh4PfGUfWS/ExpenseWisePrototype?node-id=5-6&p=f&t=oEU978KnVxfwHxvH-0

https://www.figma.com/design/dkH6TaJTsI4chh4PfGUfWS/ExpenseWisePrototype?node-id=5-102&p=f&t=oEU978KnVxfwHxvH-0

**Colors will be added during the implementation!**


## 4. Information Architecture and Technical Design

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

**Feedback Collection**:
- Necessary changes will be made
- Target to make user friendly




