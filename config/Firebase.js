// Firebase configuration and connection
// uses environment variables from environment.js (part of gitignore so not uploaded to github)
import getEnvVars from '../environment';
import firebase from 'firebase';
import 'firebase/firestore';
// import 'firebase/auth';

// import env variables from getEnvVars
const { REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
    MEASUREMENT_ID
 } = getEnvVars();

// Firebase config details from firebase project
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: MEASUREMENT_ID
}

// Initialize Firebase
let Firebase;
if (!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
    console.log('connected...')
  } else {
    Firebase = firebase.app(); // if already initialized, use that one
    console.log('already connected...')
  }

  // firestore db setup
  // export const db = firebase.firestore();

  // db.settings({
  //   timestampsInSnapshots: true
  // })

// export const fbAuth = fbApp.auth();
export default Firebase;