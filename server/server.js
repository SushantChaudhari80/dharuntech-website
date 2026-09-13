require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = Number(process.env.PORT || 3000);
const recipient = process.env.MAIL_TO || process.env.SMTP_USERNAME;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

app.use(express.json({ limit: '20kb' }));

app.post('/api/contact', async (request, response) => {
  const { name, email, phone, company, service, message } = request.body;

  if (!name || !email || !service || !message) {
    return response.status(400).json({ message: 'Name, email, service and message are required.' });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to: recipient,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Company: ${company || 'Not provided'}`,
        `Service: ${service}`,
        '',
        'Message:',
        message
      ].join('\n')
    });

    return response.status(204).send();
  } catch (error) {
    console.error('Email delivery failed:', error);
    return response.status(500).json({ message: 'Unable to send enquiry.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
