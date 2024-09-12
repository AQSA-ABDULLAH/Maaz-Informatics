const express = require('express');
const router = express.Router();
const SliderController = require("../controllers/slider/SliderController");

// PROTECTED ROUTES
router.post("/add-slider", SliderController.createTeam); 

// PUBLIC ROUTES
router.get("/get-slider/:id", SliderController.getTeam);
router.get("/get-slider", SliderController.getTeamAll);

module.exports = router;