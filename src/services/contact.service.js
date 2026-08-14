import { transporter } from '../config/mailer.js';
import { config } from '../config.js';

export const createMsg = async (msgData) => {
  const { name, email, message } = msgData;

  const mailOptions = {
    from: config.user,
    to: config.receiver,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};