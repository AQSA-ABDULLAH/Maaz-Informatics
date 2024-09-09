const User = require("../../models/Users");
const { createToken } = require("../../helpers/jwt");
const { passwordCompare } = require("../../helpers/hashPassword");

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Username and Password" });
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {

            const isMatch = await passwordCompare(password, userLogin.password);
            if (!isMatch) {
                return res.status(400).json({ status: "400", message: "Invalid Email or Password" });
            }

            // Generate JWT Token
            const token = createToken(userLogin, false, '1d');

            // Save the token in the user document
            userLogin.tokens = userLogin.tokens.concat({ token });
            await userLogin.save();

            res.json({ status: "success", message: "Login Success", token });

        } else {
            res.status(400).json({ message: "Invalid Email or Password" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { userLogin };