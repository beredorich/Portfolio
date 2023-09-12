import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};


app.get('/sendContact', (req, res) => {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
})

app.get('/resume', (req, res) => {
    res.setHeader('Content-disposition', 'attachment; filename=Beredo_Resume.docx');
    res.download("./Beredo_Resume.docx", 'Beredo_Resume.docx', (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error downloading file');
        }
    });
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})