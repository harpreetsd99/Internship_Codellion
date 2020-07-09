// twilio account id from twilio dashboard/console
const accountSid = '';
//  twilio token from twilio dashboard/console
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
// twilio no.
  from: 'whatsapp:+14155238886',
// consumer no. 
  to: 'whatsapp:+919594280546',
 // message
  body: 'Welcome to Frood. Your Frood Order of 1 dozen Bananas has been initiated, further details will be notified. For any details visit www.frood.com.'
}).then(message => console.log(message.sid));


// -------------------------------Steps--------------------------
//  npm init --yes
//  npm install twilio@3.30.0
//  code
//  node index.js

