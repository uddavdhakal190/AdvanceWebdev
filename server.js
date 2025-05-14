const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(morgan("dev")); // Logging middleware
app.use(express.json()); // Parse JSON request bodies

// Configure CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://expense-tracker.onrender.com', 'http://localhost:3000']
    : 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Serve static files from the React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React build directory
  app.use(express.static(path.join(__dirname, "client/build")));
  
  // Handle React routing, return all requests to React app
  app.get("*", (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? 'An error occurred' : err.message
  });
});

// Define the port
const PORT = process.env.PORT || 8080;

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();