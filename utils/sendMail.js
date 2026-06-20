const nodemailer = require("nodemailer");

const sendMail = async ({ subject, to, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "avinashgaride@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: `"RideShare IITPKD" <avinashgaride@gmail.com>`,
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
