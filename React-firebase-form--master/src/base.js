import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAWtUYhEhxUds7wxpXCUf-uxkEnsgoCRY",
    authDomain: "triktales.firebaseapp.com",
    databaseURL: "https://triktales.firebaseio.com",
    projectId: "triktales",
    storageBucket: "triktales.appspot.com",
    messagingSenderId: "782183878055",
    appId: "1:782183878055:web:ffbbc45e331b4e1db2fa82",
    measurementId: "G-D25F1N0GNJ"
  };
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  export  { base }