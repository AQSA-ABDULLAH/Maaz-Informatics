const mongoose = require("mongoose");

// Defining Schema
const jobsSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    location: { type: String, trim: true, required: true },
    category: { type: String, trim: true, required: true },
    status: { type: String, trim: true },
    description: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
});

// Creating Model
const JobsModal = mongoose.model('Jobs', jobsSchema);
module.exports = JobsModal;
