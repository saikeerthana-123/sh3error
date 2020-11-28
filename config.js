import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBW4HejR_EvlNfugFoA7CSf3SAcpcShv4U",
    authDomain: "story-hub-20aaf.firebaseapp.com",
    databaseURL: "https://story-hub-20aaf.firebaseio.com",
    projectId: "story-hub-20aaf",
    storageBucket: "story-hub-20aaf.appspot.com",
    messagingSenderId: "712890717583",
    appId: "1:712890717583:web:fd199f8f64339a79bce7fa"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();