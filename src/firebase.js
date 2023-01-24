import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC72CrML5ntF8Gl3MZ-KpnBg-kjCwyZNkA",
    authDomain: "challenge-50279.firebaseapp.com",
    projectId: "challenge-50279",
    storageBucket: "challenge-50279.appspot.com",
    messagingSenderId: "981466838666",
    appId: "1:981466838666:web:f4dd73bbcac9496094df73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };