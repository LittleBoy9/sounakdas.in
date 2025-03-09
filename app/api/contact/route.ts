import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in', // External ProtonMail SMTP server
  port: 465, // Use 587 if STARTTLS is needed instead of SSL
  secure: true, // true for port 465 (SSL), false for 587 (STARTTLS)
  auth: {
    user: process.env.ZOHO_MAIL_ADDRESS, // Your Proton Mail address
    pass: process.env.ZOHO_MAIL_PASSKEY, // Your Proton Mail password or App Password
  },
});

// HTML email template
const generateEmailTemplate = (name: string, email: string , userMessage: string) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload: Record<string, string>, message: string) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: "Portfolio Contact <" + process.env.ZOHO_MAIL_ADDRESS + ">", 
    to: process.env.ZOHO_MAIL_ADDRESS, 
    subject: `New Message From ${name}`, 
    text: message, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };


  // console.log(mailOptions)
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request: any) {
  try {
    
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Send email
    console.log("Sending email...");
    const emailSuccess = await sendEmail(payload, message);

    if(emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message and email sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send message or email.',
    }, { status: 500 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};