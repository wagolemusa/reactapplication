import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHF6r-pqx5aSUZ3_CmOAQH8RgZhGZrTLA",
    authDomain: "refugeplan.firebaseapp.com",
    databaseURL: "https://refugeplan.firebaseio.com",
    projectId: "refugeplan",
    storageBucket: "refugeplan.appspot.com",
    messagingSenderId: "622230161953"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
