const User = require("../../models/Users");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class ForgetPassword {
    // OTP GENERATION
    static async generateOTP() {
        return Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    }

    // FORGET PASSWORD
    static forgetPassword = async (req, res) => {
        try {
            const { email } = req.body;

            // Check if the user exists with the provided email
            const userExist = await User.findOne({ email });
            if (!userExist) {
                return res.status(400).json({ status: "error", message: "User not found with the provided email." });
            }

            // Generate OTP
            const OTP = await ForgetPassword.generateOTP();

            // Update user with the OTP
            userExist.otp = OTP;
            await userExist.save();

            // Send OTP email to the user
            const template = await compileEmailTemplate({
                fileName: "otp.mjml", // make sure to have a template for OTP
                data: { email, OTP },
            });

            try {
                await mailer.sendMail(email, "OTP for Password Reset", template);
                return res.status(200).json({
                    status: "success",
                    message: "OTP sent successfully to your email.",
                });
            } catch (error) {
                console.error("Failed to send OTP email:", error);
                return res.status(500).json({ error: "Failed to send OTP email." });
            }
        } catch (error) {
            console.error("Error in forget password flow:", error.message);
            return res.status(500).json({ error: "An error occurred while processing your request." });
        }
    };
}

module.exports = { ForgetPassword };
