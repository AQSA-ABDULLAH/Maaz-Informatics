const mongoose = require("mongoose");
const TeamModal = require("../../models/ClientPartner");

class TeamController {
    // Create a new team partner and save the image URL
    static createTeam = async (req, res) => {
        const { image } = req.body;  // Expecting image URL in the request body
        console.log(image);

        if (!image) {
            return res.status(400).send({ status: "failed", message: "Image URL is required" });
        }

        try {
            const newTeam = new TeamModal({ image });
            await newTeam.save();
            res.status(201).send({ status: "success", message: "Image saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save image" });
        }
    };

    // Get all team members (all images)
    static getTeamAll = async (req, res) => {
        try {
            const teamData = await TeamModal.find();
            res.status(200).send({ status: "success", data: teamData });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to retrieve data" });
        }
    };

    // Get a specific team member (image) by ID
    static getTeam = async (req, res) => {
        const { id } = req.params;

        // Check if ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ status: "failed", message: `Invalid ID: ${id}` });
        }

        try {
            const teamData = await TeamModal.findById(id);
            if (!teamData) {
                return res.status(404).send({ status: "failed", message: "Team not found" });
            }

            res.status(200).send({ status: "success", data: teamData });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to retrieve data" });
        }
    };
}

module.exports = TeamController;
