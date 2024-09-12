const mongoose = require("mongoose");
const SliderModal = require("../../models/Slider");

class SliderController {
    // Create a new slider and save the image URL
    static createSlider = async (req, res) => {
        const { image } = req.body;  // Expecting image URL in the request body
        console.log(image);

        if (!image) {
            return res.status(400).send({ status: "failed", message: "Image URL is required" });
        }

        try {
            const newSlider = new SliderModal({ image });
            await newSlider.save();
            res.status(201).send({ status: "success", message: "Image saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save image" });
        }
    };

    // Get all slider images
    static getSliderAll = async (req, res) => {
        try {
            const sliderData = await SliderModal.find();
            res.status(200).send({ status: "success", data: sliderData });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to retrieve data" });
        }
    };

    // Get a specific slider image by ID
    static getSlider = async (req, res) => {
        const { id } = req.params;

        // Check if ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: "failed", message: `Invalid ID: ${id}` });
        }

        try {
            const sliderData = await SliderModal.findById(id);
            if (!sliderData) {
                return res.status(404).send({ status: "failed", message: "Slider image not found" });
            }

            res.status(200).send({ status: "success", data: sliderData });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to retrieve data" });
        }
    };
}

module.exports = SliderController;
