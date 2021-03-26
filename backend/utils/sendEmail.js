const nodemailer = require('nodemailer');

const sendEmail = async (fields) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: fields.email,
        subject: fields.subject,
        text: fields.message
    }

    await transporter.sendMail(message);
};

module.exports = sendEmail;