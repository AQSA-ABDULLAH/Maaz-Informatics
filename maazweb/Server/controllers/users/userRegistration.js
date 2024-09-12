const User = require("../../models/Users");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class UserController {
    static userRegistration = async(req, res) => {
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

            console.log(userName,
                firstName,
                lastName,
                middleName,
                email,
                phoneNumber,
                password,
                confirmPassword,
                country,
                status,
                profilePicture, )

            if (!email || !password || !confirmPassword || !country) {
                return res
                    .status(422)
                    .json({ error: "Please fill in all fields properly" });
            }

            const userExist = await User.findOne({ email: email });

            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            if (password !== confirmPassword) {
                return res.status(422).json({
                    error: "Password and Confirm Password don't match",
                });
            }

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
            });

            const savedUser = await user.save(); // Save the user and get the saved user object

            // Generate JWT Token using the saved user object
            const token = createToken(savedUser, false, "1d");

            res.json({ status: "success", message: "registration Success", token });

            // Send Registration mail to user
            // const template = await compileEmailTemplate({
            //     fileName: "register.mjml",
            //     data: {
            //         firstName,
            //     },
            // });

            // try {
            //     await mailer.sendMail(email, "Mail Verification", template);
            //     return res.status(201).send({
            //         status: "success",
            //         message: "User created successfully",
            //         token: token,
            //     });
            // } catch (error) {
            //     console.error("Failed to send Create User email:", error);
            //     return res.status(500).send({
            //         error: "Failed to send Create User email.",
            //     });
            // }
        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    };

    // static mailVerification = async (req, res) => {
    //     try {
    //         const id = req.params.id;
    //         console.log(id);
    //         const user = await User.findById(id);

    //         if (!user) {
    //             return res.status(404).json({ error: "User not found" });
    //         }

    //         user.is_verified = true;

    //         await user.save();

    //         return res.status(200).json(user);
    //     } catch (error) {
    //         console.error("Error in user verification", error);
    //         return res.status(500).json({ error: "Failed to verify user" });
    //     }
    // };
    
}

module.exports = { UserController };