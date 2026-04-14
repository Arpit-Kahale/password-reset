const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// IMPORTANT: direct function reference
router.post("/forgot-password", authController.forgotPassword);

module.exports = router;