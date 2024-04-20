import * as nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const mailTransporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.MAILER_USER, pass: process.env.MAILER_PASSWORD } })

function sendNewEmail({ receptorEmail, htmlMessage, subject }) {
    mailTransporter.sendMail({ from: process.env.MAILER_USER, to: receptorEmail, subject: subject, html: htmlMessage}, function (err, info) {
        if(err) {
            throw new Error(err.message)
        }
        console.info({info})
    })
}
const name = "Daniel Arce"
const email = "daniel.camposarce@gmail.com"
const password = "dca031394$"
sendNewEmail({receptorEmail:'daniel.camposarce@gmail.com',subject:`Recovery Password ${email}`, message:`
  <style>
    .header {
      text-transform: uppercase;
      text-align: center;
      padding: 10px 0px;
      font-weight: bold
    }
  </style>
  <table style="width:100%">
    <tr>
      <td  class="header" colspan="2">Order Manager App</td>
    </tr>
    <tr>
      <td>Estimado: ${name}</td>
    </tr>
    <tr>
      <td>Solicitaste el reenvio de contraseña para el correo: ${email}</td>
    </tr>
    <tr>
      <td>la contraseña es: ${password}</td>
    </tr>
    <tr>
      <td>Gracias</td>
    </tr>
  </table>`})