const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDb();

// Initialize Express app
const app = express();

// Middlewares
app.use(morgan("dev")); // Logging middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// API Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Serve static files from the React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "./client/build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Define the port
const PORT = process.env.PORT || 8080;

// Production Script
app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});