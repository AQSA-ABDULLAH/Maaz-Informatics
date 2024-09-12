const mongoose = require("mongoose");
const ContactUsModal = require("../../models/ContactUs");

class ContactUsController {
    // Create a new message (Contact Us)
    static newContactUs = async (req, res) => {
        const { name, country, email, phoneno, message } = req.body;

        // Validation checks for required fields
        if (!name || !country || !email || !phoneno || !message) {
            return res.status(400).send({
                status: "failed",
                message: "All fields are required (name, country, email, phoneno, message)"
            });
        }

        try {
            // Save the new message
            const newMessage = new ContactUsModal({ name, country, email, phoneno, message });
            await newMessage.save();

            res.status(201).send({
                status: "success",
                message: "Message saved successfully"
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: "failed",
                message: "Failed to save message"
            });
        }
    };

    // Get all contact us messages
    static getContactAll = async (req, res) => {
        try {
            const contactusData = await ContactUsModal.find();
            res.status(200).send({
                status: "success",
                data: contactusData
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: "Failed to get messages"
            });
        }
    };

    // Get a single message by ID
    static getContactUs = async (req, res) => {
        const { id } = req.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({
                status: "failed",
                message: `Invalid ID: ${id}`
            });
        }

        try {
            const contactUsData = await ContactUsModal.findById(id);
            if (!contactUsData) {
                return res.status(404).send({
                    status: "failed",
                    message: "Message not found"
                });
            }

            res.status(200).send({
                status: "success",
                data: contactUsData
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: "Failed to get message"
            });
        }
    };
}

module.exports = ContactUsController;
