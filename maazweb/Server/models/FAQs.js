const mongoose = require("mongoose");

//Defining Schema
const faqsSchema = new mongoose.Schema({
    question: { type: String, trim: true },
    answer: { type: String, trim: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

//CREATING MODAL
const FAQsModal = mongoose.model('FAQs', faqsSchema);
module.exports = FAQsModal;