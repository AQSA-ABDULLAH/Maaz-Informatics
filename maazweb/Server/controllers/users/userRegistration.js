const User = require("../../models/Users");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class UserController {

    // OTP GENERATION
    static async generateOTP() {
        return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    }

    // USER REGISTRATION
    // controllers/UserController.js

static userRegistration = async (req, res) => {
    try {
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

        if (!email || !password || !confirmPassword || !country) {
            return res.status(400).json({ error: "Please fill in all fields properly" });
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "User already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password don't match" });
        }

        // Generate OTP
        const OTP = await UserController.generateOTP();

        // Hashing Password
        const hashedPassword = await hashPassword(password);

        const user = new User({
            userName,
            firstName,
            lastName,
            middleName,
            email,
            phoneNumber,
            password: hashedPassword,
            country,
            status,
            profilePicture,
            otp: OTP
        });

        const savedUser = await user.save();

        // Send Registration mail to user with OTP
        const template = await compileEmailTemplate({
            fileName: "register.mjml",
            data: { email, OTP },  // Pass the OTP along with email to the template
        });

        try {
            await mailer.sendMail(email, "Mail Verification", template);
            return res.status(201).json({
                status: "success",
                message: "User created successfully",
                token: createToken(savedUser, false, "1d"),
            });
        } catch (error) {
            console.error("Failed to send Create User email:", error);
            return res.status(500).json({ error: "Failed to send Create User email." });
        }
    } catch (error) {
        console.error("Error in user registration:", error.message);
        return res.status(500).json({ error: "Failed to register user." });
    }
};

    // VERIFY OTP
    static async verifyOTP(req, res) {
        try {
            const { email, otp } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ status: "error", message: "User not found with the provided email." });
            }

            if (user.is_verified) {
                return res.status(400).json({ status: "error", message: "User account is already verified." });
            }

            if (user.otp !== String(otp)) {
                return res.status(400).json({ status: "error", message: "Incorrect OTP." });
            }

            // Update user's is_verified status
            user.is_verified = true;
            await user.save();

            return res.status(200).json({ status: "success", message: "Account Verified Successfully!" });
        } catch (error) {
            console.error("Error verifying OTP:", error.message);
            return res.status(500).json({ status: "error", message: "Failed to verify OTP.", error: error.message });
        }
    }
}

module.exports = { UserController };
