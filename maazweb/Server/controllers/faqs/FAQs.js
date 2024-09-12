const mongoose = require("mongoose");
const FAQsModal = require("../../models/FAQs");

class FAQsController {
    // Create a new FAQ
    static createFAQ = async (req, res) => {
        const { question, answer } = req.body;

        // Validation checks for required fields
        if (!question) return res.status(400).send({ status: "failed", message: `Question is required` });
        if (!answer) return res.status(400).send({ status: "failed", message: `Answer is required` });

        try {
            // Save the new FAQ
            const newFAQ = new FAQsModal({ question, answer });
            await newFAQ.save();

            res.status(201).send({ status: "success", message: "FAQ saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save FAQ" });
        }
    };

    // Get all FAQs
    static getFAQsAll = async (req, res) => {
        try {
            const faqsData = await FAQsModal.find();
            res.status(200).send({ status: "success", data: faqsData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get FAQs" });
        }
    };

    // Get a single FAQ by ID
    static getFAQ = async (req, res) => {
        const { id } = req.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ status: "failed", message: `Invalid ID: ${id}` });

        try {
            const faqData = await FAQsModal.findById(id);
            if (!faqData) return res.status(404).send({ status: "failed", message: "FAQ not found" });

            res.status(200).send({ status: "success", data: faqData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get FAQ" });
        }
    };
}

module.exports = FAQsController;
