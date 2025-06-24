// import dotenv from 'dotenv';
// dotenv.config();
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     service: 'gmail', // email service provider
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// export const sendResetPasswordEmail = async (email, token) => {
//     try {
//         const mailOptions = {
//             from: `"FashionTube support" <process.env.EMAIL_USER>`,
//             to: toEmail,
//             subject: 'Reset your Password',
//             html: `
//             <h3>Hi there!</h3>
//         <p>You requested a password rest for your FashionTube account.</p>
//         <p><a href="${resetLink}">Click here to reset your password</a></p>
//         <p>If you didn't request a reset, please just ignore this message.</p>
//         <hr>
//         <p>FashionTube</p>
//         `
//         };
// try {
//     await transporter.sendMail(mailOptions);
//     console.log(`Reset email sent to${toEmail}`);
//   } catch (error) {
//     console.error('❌ Error sending reset email:', error.message);
//   }
// };