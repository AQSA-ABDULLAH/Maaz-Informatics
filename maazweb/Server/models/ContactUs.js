const mongoose = require("mongoose");

// Defining Schema
const contactusSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        country: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true },
        phoneno: { type: String, trim: true, required: true },
        message: { type: String, trim: true, required: true },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

// Creating Model
const ContactUsModal = mongoose.model('ContactUs', contactusSchema);
module.exports = ContactUsModal;
