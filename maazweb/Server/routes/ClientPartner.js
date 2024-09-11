const express = require('express');
const router = express.Router();
const ClientPartner = require("../controllers/team/ClientPartner");

// PROTECTED ROUTES
router.post("/add-partner", ClientPartner.createTeam);  // This will handle image uploads

// PUBLIC ROUTES
router.get("/get-partner/:id", ClientPartner.getTeam);  // For getting a single image by ID
router.get("/get-partners", ClientPartner.getTeamAll);  // For getting all images

module.exports = router;
