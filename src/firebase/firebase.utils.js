import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD1dFnv4L2kHrjnjDbZJ7E2f5f_8-sy7lA",
    authDomain: "crwn-data-2021.firebaseapp.com",
    projectId: "crwn-data-2021",
    storageBucket: "crwn-data-2021.appspot.com",
    messagingSenderId: "534263664370",
    appId: "1:534263664370:web:73962afa4cec48eb724a6b",
    measurementId: "G-XWBBP1823X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firstore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' } )
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;