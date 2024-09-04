const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
const { userLogin } = require('../controllers/users/userLogin');
const router = express.Router();
require("../db/connection");

// PUBLIC ROUTES
router.post("/user_signUp", UserController.userRegistration);
router.post("/user_signIn", userLogin);

module.exports = router;
