import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React app can communicate with the backend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow local dev server
  credentials: true
}));

app.use(express.json());

// Main contact form API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Check if credentials exist
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('SMTP credentials missing in server/.env configuration.');
    return res.status(500).json({ 
      error: 'SMTP configurations are not set up on the server yet. Please add credentials to server/.env.' 
    });
  }

  // Set up Nodemailer transporter (default configured for Gmail SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Gmail App Password is required
    }
  });

  // Compose email metadata
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || 'vedantkumbhar82@gmail.com', // Sends notification to you
    replyTo: email, // Reply-to will be set to the user who filled the form
    subject: `📩 New Portfolio Message from ${name}`,
    text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8B5CF6; border-radius: 4px;">
          <p style="margin: 0; font-style: italic; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="font-size: 11px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This message was sent from your portfolio website contact form.
        </p>
      </div>
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${email} to ${mailOptions.to}`);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error sending mail:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please verify SMTP settings and try again.',
      details: error.message 
    });
  }
});

// Start listening
app.listen(PORT, () => {
  console.log(`Portfolio backend server running on port ${PORT}`);
});
