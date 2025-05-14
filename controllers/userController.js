const User = require("../models/userModel");

// login callback
const loginController = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error in registerController:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginController, registerController };