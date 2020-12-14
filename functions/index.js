const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);
//to make it work you need gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;
console.log(gmailEmail, gmailPassword);

//email transponder
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

//this is callback function to return status to firebase console
const getDeliveryStatus = (error, info) => {
  if (error) {
    return console.log('Email send error', error);
  } else return console.log('Email send success', info.messageId);
};

//creating function for sending emails
const goMail = (message) => {
  console.log(message);

  // setup email data with unicode symbols
  //this is how your email are going to look like
  const mailOptions = {
    from: gmailEmail, // sender address
    to: message.email, // list of receivers
    bcc: ['joseph.kalayci@gmail.com', 'yb.kalayci@gmail.com'],
    subject: 'Confirmation email', // Subject line
    //text: message, // plain text body
    html: `<html><body><div>Hi ${message.name},<div><br></div><div>Thank you for reaching out to me. I received your following message and will get back to you as soon as possible.</div><div><br></div><div>message:${message.message}</div><div><br></div><div><br></div><div>Sincerely,</div><div><br></div><div>Joseph Y. Kalayci</div><div>joseph.kalayci@gmail.com</div><div>(647)606-9696</div></div></body></html>`, // html body
  };

  //call of this function send an email, and return status
  transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.firestore
  .document('/messages/{messageId}')
  .onCreate((snap, context) => {
    //here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.data();

    //here we send new data using function for sending emails
    goMail(createdData);
  });
