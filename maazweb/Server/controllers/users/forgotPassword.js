const User = require("../../models/Users");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const forgotPassword = async(req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Enter Email" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User with this email does not exist" });
        }

        // Generate a reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        const mailOptions = {
            to: user.email,
            from: 'your-email@gmail.com',
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested to reset the password for your account.\n\n
                   Please click on the following link, or paste it into your browser to complete the process:\n\n
                   http://localhost:5000/api/users/reset-password/${token}\n\n
                   If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        await transporter.sendMail(mailOptions);

        res.json({ status: "success", message: "Password reset link sent to your email" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { forgotPassword };