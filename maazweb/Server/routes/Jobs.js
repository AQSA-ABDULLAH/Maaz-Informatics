const express = require('express');
const router = express.Router();
const JobController = require("../controllers/career/JobController");

// PROTECTED ROUTES (Use these in combination with authentication middleware)
router.post("/create-job", JobController.postJob);  // Corrected function name
router.get("/get-job/:id", JobController.getJob);   // Corrected function name

// PUBLIC ROUTES
router.get("/get-jobs", JobController.getAllJobs);  // Corrected function name

module.exports = router;
