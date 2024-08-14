const nodemailer = require('nodemailer');
const { emailConfig } = require('../config/config');

const transporter = nodemailer.createTransport(emailConfig);

exports.sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
