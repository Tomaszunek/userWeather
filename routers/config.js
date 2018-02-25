// config.js
const nodemailer = require('nodemailer');

module.exports = {
  'secretJwt': 'MOJ BARDZO SEKRETNY KOD JWT',
  'hostname': 'http://localhost:3000',
  'transporter' : nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pawlowskitomaszuu@gmail.com', // generated ethereal user
            pass: 'Papla123' // generated ethereal password
        }
    }),
    'mailOptions' : {
        from: 'pawlowskitomaszuu@gmail.com',        
    }
};
