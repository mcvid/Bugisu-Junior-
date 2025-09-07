// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "macherinaveed4@gmail.com",   // your Gmail
    pass: "ujvt dwmi womw oiej"         // your App Password
  }
});

// Route to handle form submission
app.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "macherinaveed4@gmail.com",   // where the school receives the message
    subject: subject || "New Message from School Website",
    text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending mail:", error);
      return res.status(500).json({ success: false, error });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
