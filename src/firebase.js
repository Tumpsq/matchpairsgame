var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDU6j8z8F9hvb0i4xFgq8BXvis9Ww41KeY",
  authDomain: "matchpairsgame.firebaseapp.com",
  databaseURL: "https://matchpairsgame.firebaseio.com",
  projectId: "matchpairsgame",
  storageBucket: "matchpairsgame.appspot.com",
  messagingSenderId: "438545146387",
  appId: "1:438545146387:web:1ea87b2e2d0b94e1ca95e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
