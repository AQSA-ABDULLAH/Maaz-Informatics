const mongoose = require("mongoose");
const JobModal = require("../../models/Jobs");

class JobController {
    // Create a new Job
    static postJob = async (req, res) => {
        const { title, location, category, status, description } = req.body;
        
        console.log(title, location, category, description)
        // Validation checks
        if (!title) return res.status(400).send({ status: "failed", message: "Title is required" });
        if (!location) return res.status(400).send({ status: "failed", message: "Location is required" });
        if (!category) return res.status(400).send({ status: "failed", message: "Category is required" });
        if (!description) return res.status(400).send({ status: "failed", message: "Description is required" });

        try {
            // Create new job entry
            const newJob = new JobModal({ title, location, category, status, description });
            await newJob.save();

            res.status(201).send({ status: "success", message: "Job saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save job" });
        }
    };

    // Get all Jobs
    static getAllJobs = async (req, res) => {
        try {
            const jobData = await JobModal.find();
            res.status(200).send({ status: "success", data: jobData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get jobs" });
        }
    };

    // Get a Job by ID
    static getJob = async (req, res) => {
        const { id } = req.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ status: "failed", message: `Invalid ID: ${id}` });

        try {
            const jobData = await JobModal.findById(id);
            if (!jobData) return res.status(404).send({ status: "failed", message: "Job not found" });

            res.status(200).send({ status: "success", data: jobData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get job" });
        }
    };
}

module.exports = JobController;