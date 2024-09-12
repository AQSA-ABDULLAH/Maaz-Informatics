const express = require('express');
const router = express.Router();
const SliderController = require("../controllers/slider/SliderController");

// PROTECTED ROUTES
router.post("/add-slider", SliderController.createSlider); 

// PUBLIC ROUTES
router.get("/get-slider/:id", SliderController.getSlider);
router.get("/get-slider", SliderController.getSliderAll);

module.exports = router;
