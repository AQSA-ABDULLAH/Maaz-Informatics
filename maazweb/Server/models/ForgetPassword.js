const mongoose = require("mongoose");

const forgetPasswordSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300,
    },
});

module.exports = mongoose.model("ForgetPassword", forgetPasswordSchema);
