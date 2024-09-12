const express = require('express');
const router = express.Router();
const ContactUsController = require("../controllers/contact-us/ContactUs");

// PROTECTED ROUTES
router.post("/send-message", ContactUsController.newContactUs); 

// PUBLIC ROUTES
router.get("/get-messages", ContactUsController.getContactAll);
router.get("/get-message/:id", ContactUsController.getContactUs);

module.exports = router;