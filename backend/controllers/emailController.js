import { configDotenv } from 'dotenv';
import nodemailer from 'nodemailer';

configDotenv()

async function sendMail(req, res) {
    try{

        const {name, email, phone, message} = req.body;

        if(!name | !email | !phone | !message)
            return res.json({success:false, message:"Please Enter All Information"})

        
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from:email,
            to:"shamsher.khan7515@gmail.com",
            subject:`Profolio | Message`,
            html:`
                <h3>Name: ${name}</h3>
                <h3>Email: ${email}</h3>
                <h3>Phone: ${phone}</h3>
                <p>Message: <br/> ${message}</p>
             `
        };

      await transporter.sendMail(mailOptions);

      res.json({success:true, message:"Email sent to Mr. Shamsher"})

    }catch(error){
      res.json({success:false, message:error.message})

    }
}

export default sendMail;