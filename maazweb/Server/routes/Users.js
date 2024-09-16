const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
const { userLogin } = require('../controllers/users/userLogin');
const {ProfileController} = require("../controllers/users/userProfile")
const router = express.Router();
require("../db/connection");

// PUBLIC ROUTES
router.post("/user_signUp", UserController.userRegistration);
router.post("/user_signIn", userLogin);

// PROFILE ROUTES
router.get("/get-user-profile/:id", ProfileController.getUserProfile);
router.get("/get-users", ProfileController.getAllUsers);
router.patch("/update-profile/:id", ProfileController.updateUserProfile);

// FORGET PASSWORD ROUTES

// OTP ROUTES
router.post("/send-otp", UserController.verifyOTP )

module.exports = router;