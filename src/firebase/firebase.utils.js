import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiZXUb0XngBOKNfxoRLOFob14Z-n0KFjI",
    authDomain: "crwn-db-aw.firebaseapp.com",
    databaseURL: "https://crwn-db-aw.firebaseio.com",
    projectId: "crwn-db-aw",
    storageBucket: "crwn-db-aw.appspot.com",
    messagingSenderId: "830734892336",
    appId: "1:830734892336:web:408de5ffe343968ed2dcf5",
    measurementId: "G-4YNKZGK2YV"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;