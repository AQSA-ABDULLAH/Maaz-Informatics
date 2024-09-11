const express = require('express');
const router = express.Router();
const FAQsController = require("../controllers/faqs/FAQs");

// PROTECTED ROUTES
router.post("/post-faqs", FAQsController.createFAQ); 
router.get("/get-faqs/:id", FAQsController.getFAQ);

// PUBLIC ROUTES
router.get("/get-faqs", FAQsController.getFAQsAll); 

module.exports = router;
