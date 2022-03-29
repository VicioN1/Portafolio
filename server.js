const express= require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { Socket } = require('dgram');



dotenv.config();
let initialPath = path.join(__dirname, "public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath,"index.html"));
})

app.post('/mail', (req, res) =>{
    const {firstname, lastname, email, msg} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
        const mailOptions = {
            from: 'fervicion405@gmail.com',
            to: 'fercba5678@gmail.com',
            subject: 'postfolio',
            text: `Nombre: ${firstname}, \nApellido: ${lastname}, \nEmail: ${email}, \nMensage: ${msg}`
        }

        transporter.sendMail(mailOptions, (err, result) => {
            if (err){
                console.log(err);
                res.json('!ops, hubo un errror')
            }else{
                res.json('Gracias por contactarme');
            }
        })

})

app.listen('3000',() =>{
    console.log('listening.....');
  })
  
