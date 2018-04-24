import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBjC_lyi3vFoISDjliND54NoCWP25npUQo",
    authDomain: "react-expense-tracker-3215e.firebaseapp.com",
    databaseURL: "https://react-expense-tracker-3215e.firebaseio.com",
    projectId: "react-expense-tracker-3215e",
    storageBucket: "react-expense-tracker-3215e.appspot.com",
    messagingSenderId: "609832639483"
  };


  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


//   database.ref('test').push("hello");

  export {firebase,googleAuthProvider,database as default };