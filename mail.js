require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.APP_PASSWORD
	},
	tls: {
		rejectUnauthorized: false // Fix for self-signed certificate error
	}
});

async function sendEmail(to, subject, html) {
	try {
		const info = await transporter.sendMail({
			from: `"Reach Social" <${process.env.EMAIL}>`,
			to,
			subject,
			html: html
		});
		console.log('Email sent:', info.response);
	} catch (error) {
		console.error('Error sending email:', error);
	}
}

sendEmail('bhavit.codes@gmail.com', 'Test Email', ``);