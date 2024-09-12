const mongoose = require("mongoose");

//Defining Schema
const sliderSchema = new mongoose.Schema({
    image: { type: String, trim: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

//CREATING MODAL
const SliderModal = mongoose.model('Slider', sliderSchema);
module.exports = SliderModal;