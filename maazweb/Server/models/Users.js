const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const usersSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
    city: { type: String, trim: true },
    zipCode: { type: Number, trim: true },
    address: { type: String, trim: true },
    profilePicture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    is_admin: { type: Boolean, default: false, required: true },
    is_verified: { type: Boolean, default: false },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: { type: Date },
});

const User = mongoose.model("users", usersSchema);
module.exports = User;