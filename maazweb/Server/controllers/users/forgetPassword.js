const User = require("../../models/Users");
const ForgetPassword = require("../../models/ForgetPassword.js");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class ForgetPasswordController {
    // OTP GENERATION
    static async generateOTP() {
        return Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    }

    // FORGET PASSWORD
    static forgetPassword = async (req, res) => {
        try {
            const { email } = req.body;

            // Check if the user exists in the User model with the provided email
            const userExist = await User.findOne({ email });
            if (!userExist) {
                return res.status(400).json({ status: "error", message: "User not found with the provided email." });
            }

            // Check if there's already an entry in ForgetPassword for the same email
            let forgetPassword = await ForgetPassword.findOne({ email });

            // If no entry exists, create a new ForgetPassword entry
            if (!forgetPassword) {
                forgetPassword = new ForgetPassword({ email });
            }

            // Generate OTP
            const OTP = await ForgetPasswordController.generateOTP();

            // Update or set OTP for the user in the ForgetPassword model
            forgetPassword.otp = OTP;
            await forgetPassword.save();

            // Compile email template with the OTP
            const template = await compileEmailTemplate({
                fileName: "otp.mjml", // Ensure this template exists
                data: { email, OTP },
            });

            // Send OTP email to the user
            try {
                await mailer.sendMail(email, "OTP for Password Reset", template);
                return res.status(200).json({
                    status: "success",
                    message: "OTP sent successfully to your email.",
                });
            } catch (error) {
                console.error("Failed to send OTP email:", error);
                return res.status(500).json({ status: "error", message: "Failed to send OTP email." });
            }

        } catch (error) {
            console.error("Error in forget password flow:", error.message);
            return res.status(500).json({ status: "error", message: "An error occurred while processing your request." });
        }
    };

    // RESET PASSWORD
    static async resetPassword(req, res) {
        try {
            const { email, otp } = req.body;

            // Check if the email exists in the ForgetPassword model
            const forgetPasswordRecord = await ForgetPassword.findOne({ email });

            if (!forgetPasswordRecord) {
                return res.status(400).json({ status: "error", message: "User not found with the provided email." });
            }

            // Check if the provided OTP matches the one in the ForgetPassword record
            if (forgetPasswordRecord.otp !== otp) {
                return res.status(400).json({ status: "error", message: "Incorrect OTP." });
            }

            return res.status(200).json({ status: "success", message: "Account Verified Successfully!" });
        } catch (error) {
            console.error("Error verifying OTP:", error.message);
            return res.status(500).json({ status: "error", message: "Failed to verify OTP.", error: error.message });
        }
    }
}

module.exports = { ForgetPasswordController };


