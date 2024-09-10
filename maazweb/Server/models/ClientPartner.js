const mongoose = require("mongoose");

//Defining Schema
const teamSchema = new mongoose.Schema({
    image: { type: String, trim: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

//CREATING MODAL
const TeamModal = mongoose.model('Team', teamSchema);
module.exports = TeamModal;