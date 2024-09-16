// models/otpModel.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  // },
  userId: {
    type: String,
  },
  otp: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

module.exports = mongoose.model("OTP", otpSchema);