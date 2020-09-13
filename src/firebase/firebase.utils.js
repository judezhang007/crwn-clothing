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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log('In createUserProfileDocument() !');  
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        const createdAtString = createdAt.getTime();

        console.log('SnapShot does not exist, updating user with data: ', {displayName, email, createdAtString, ...additionalData});

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;