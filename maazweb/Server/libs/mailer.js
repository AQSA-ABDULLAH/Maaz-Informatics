const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = async (to, subject, content) => {
    try {
        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: to,
            subject: subject,
            html: content,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Mail Sent:", info.response);

    } catch (error) {
        console.log("Error sending mail:", error.message);
    }
};

module.exports = {
    sendMail,
    send: sendMail
};


