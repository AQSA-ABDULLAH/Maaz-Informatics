const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const passwordCompare = async (password, oldPassword) => {
    return await bcrypt.compare(password, oldPassword);
};

module.exports = { hashPassword, passwordCompare };