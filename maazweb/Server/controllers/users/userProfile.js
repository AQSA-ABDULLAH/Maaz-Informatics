const User = require("../../models/Users");
const mongoose = require('mongoose');
const { hashPassword } = require("../../helpers/hashPassword");

class ProfileController {

    // GET all users
    static async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({ status: "success", data: users });
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Failed to get users" });
        }
    }

    // GET a single user profile by ID
    static async getUserProfile(req, res) {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ status: "error", message: `Invalid profile ID: ${id}` });
        }

        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ status: "error", message: `No profile found with ID: ${id}` });
            }
            res.status(200).json({ status: "success", data: user });
        } catch (error) {
            console.error("Error fetching user data:", error);
            res.status(500).json({ status: "error", message: "Failed to retrieve user data", error: error.message });
        }
    }

    // UPDATE a user profile
    static async updateUserProfile(req, res) {
        const { id } = req.params;
        const {
            userName,
            firstName,
            lastName,
            middleName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            country,
            status,
            profilePicture,
        } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({ status: "failed", message: `Invalid profile ID: ${id}` });
        }

        const updatedUser = {
            userName,
            firstName,
            lastName,
            middleName,
            email,
            phoneNumber,
            country,
            status,
            profilePicture,
        };

        // Handle password update separately
        if (password) {
            if (password !== confirmPassword) {
                return res.status(422).json({ error: "Password and Confirm Password don't match" });
            }
            updatedUser.password = await hashPassword(password);
        }

        try {
            const updatedData = await User.findByIdAndUpdate(id, updatedUser, { new: true });

            if (!updatedData) {
                return res.status(404).send({ status: "failed", message: `No profile found with ID: ${id}` });
            }

            res.status(200).send({ status: "success", message: "Profile updated successfully", data: updatedData });
        } catch (error) {
            console.error("Error updating profile:", error);
            res.status(500).send({ status: "failed", message: "Failed to update profile" });
        }
    }
}

module.exports = { ProfileController };
