const mongoose = require("mongoose");

const forget_password = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
    email: {
        type: String, trim: true
    },
    opt: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("ForgetPassword", forget_password);