const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "040e35dc3a8227",
    pass: "f22f2c7b665df3",
  },
});

function sendEmail() {
  const mailOptions = {
    from: "Your Email Address <your-email@example.com>",
    to: "Recipient Email Address <recipient-email@example.com>",
    subject: "Test Email",
    text: "This is a test email.",
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

sendEmail();
