const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
// const { userLogin, google } = require('../controllers/users/userLogin');
const { userLogin } = require('../controllers/users/userLogin');
const router = express.Router();
require("../db/connection")

// PUBLIC ROUTES
router.post("/user_signUp", UserController.userRegistration);
router.post("/user_signIn", userLogin);
//router.post("/google", google);

// router.post("/mail_verification/:id",UserController.mailVerification )
// "http://localhost:3000/mail-verification?id='+savedUser._id+'"

module.exports = router;