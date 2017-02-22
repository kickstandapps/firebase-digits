var admin = require('firebase-admin');
var serviceAccount = require('./service-account.json');
var firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://shophere-1108.firebaseio.com/"
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
