const mongoose = require("mongoose");

//Defining Schema
const blogsSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    location: { type: String, trim: true },
    category: {type: String, trim: true},
    status: {type: String, trim: true},
    description: { type: String, trim: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

//CREATING MODAL
const BlogsModal = mongoose.model('Blogs', blogsSchema);
module.exports = BlogsModal;