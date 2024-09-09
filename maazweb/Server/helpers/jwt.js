const jwt = require('jsonwebtoken');

const createToken = (user, useUserSecret = false, expiresIn) => {
    // Ensure JWT_SECRET_KEY is defined
    const baseSecret = process.env.JWT_SECRET_KEY;
    if (!baseSecret) {
        throw new Error("JWT_SECRET_KEY environment variable is not defined");
    }

    let newSecret;
    if (useUserSecret) {
        newSecret = user._id + baseSecret;
    } else {
        newSecret = baseSecret;
    }

    // Create token
    const token = jwt.sign({ userId: user._id }, newSecret, { expiresIn });
    return token;
};

const verifyToken = (token, user) => {
    const baseSecret = process.env.JWT_SECRET_KEY;
    const newSecret = user._id + baseSecret;
    return jwt.verify(token, newSecret);
};

module.exports = { createToken, verifyToken };
