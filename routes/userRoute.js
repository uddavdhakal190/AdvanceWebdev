const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

// Initialize router object
const router = express.Router();

/**
 * @route POST /api/v1/users/login
 * @desc Login user
 * @access Public
 */
router.post("/login", loginController);

/**
 * @route POST /api/v1/users/register
 * @desc Register new user
 * @access Public
 */
router.post("/register", registerController);

module.exports = router;
