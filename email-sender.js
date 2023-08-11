// 5. email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
    host: "your-smtp-host", // e.g., "smtp.gmail.com" for Gmail
    port: 587, // Port number for your SMTP provider
    secure: false, // Set to true for TLS/SSL connections
    auth: {
      user: "your-email@example.com", // Your email address
      pass: "your-password", // Your email password
    }
});

// Email message options
const mailOptions = {
    from: "your-email@example.com", // Sender's email address
    to: "your-self@example.com", // Recipient's email address
    subject: "Test Email", // Email subject
    html: "<h1>Hello, this is a test email from Node.js!</h1>", // Email content (HTML)
  };

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log('Error occured: ', error.message);
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID: ', info.messageId)
    }
});

