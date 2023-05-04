import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let { name, email, message } = req.body;

    if(!message || !name || !email){
        res.status(400).json({ error: 'Request Incomplete' });
    }

    // Create a transporter with your email service provider settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'andrescoronel1209@gmail.com',
        pass: 'uwovoduhhahsgzmw',
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: 'andrescoronel1209@gmail.com',
        to: 'andrescoronel1209@gmail.com',
        subject: 'New Message | AACR',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
