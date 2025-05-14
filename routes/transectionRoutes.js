const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

// Initialize router object
const router = express.Router();

/**
 * @route POST /api/v1/transections/add-transection
 * @desc Add a new transection
 * @access Public
 */
router.post("/add-transection", addTransection);

/**
 * @route POST /api/v1/transections/edit-transection
 * @desc Edit an existing transection
 * @access Public
 */
router.post("/edit-transection", editTransection);

/**
 * @route POST /api/v1/transections/delete-transection
 * @desc Delete a transection
 * @access Public
 */
router.post("/delete-transection", deleteTransection);

/**
 * @route POST /api/v1/transections/get-transection
 * @desc Get all transections
 * @access Public
 */
router.post("/get-transection", getAllTransection);

module.exports = router;