var firebase = require('firebase').initializeApp({
    "databaseURL": "https://shophere-1108.firebaseio.com/",
    "serviceAccount": "./service-account.json"
  });
var FirebaseDigits = require('./firebase-digits');
var firebaseDigits = FirebaseDigits(firebase, '/digits'); // Will listen on the /digits node

// Start listening
firebaseDigits.start();

// Optional listeners
firebaseDigits.on('token', function (token) {
  console.log('token created', token.substring(0, 10) + '...');
});

firebaseDigits.on('response', function (res) {
  console.log('response', res);
});

firebaseDigits.on('error', function (err) {
  console.log('error', err);
});
