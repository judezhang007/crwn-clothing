import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwISB-flm9VW7319a8oIfoQvkKMkrQUQc",
    authDomain: "crwn-db-83bfa.firebaseapp.com",
    databaseURL: "https://crwn-db-83bfa.firebaseio.com",
    projectId: "crwn-db-83bfa",
    storageBucket: "crwn-db-83bfa.appspot.com",
    messagingSenderId: "1037533295490",
    appId: "1:1037533295490:web:16933e310ca177bca7159b",
    measurementId: "G-195GFE0XVP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;