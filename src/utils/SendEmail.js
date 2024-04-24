import * as nodemailer from 'nodemailer'

const mailTransporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.MAILER_USER, pass: process.env.MAILER_PASSWORD } })

export function sendNewEmail({ receptorEmail, htmlMessage, subject}) {
    mailTransporter.sendMail({ from: process.env.MAILER_USER, to: receptorEmail, subject: subject, html: htmlMessage}, function (err, info) {
        if(err) {
            throw new Error(err.message)
        }
        console.info({info})
    })
}
