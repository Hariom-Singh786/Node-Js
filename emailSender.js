var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kaylah.rolfson@ethereal.email',
        pass: 'Yd3W6MPpkfS3Bajtdk'
    }
});

var mailOptions = {
    from: 'kaylah.rolfson@ethereal.email',
    to: 'hariomsingh25700@gmail.com',
    subject: 'Sending email using node js',
    text: 'Hi, How are you!'
}

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:'+ info.response);
    }
});