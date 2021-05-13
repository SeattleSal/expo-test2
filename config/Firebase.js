// Firebase configuration and connection
// uses environment variables from environment.js (part of gitignore so not uploaded to github)
import getEnvVars from '../environment';
import firebase from 'firebase/app';
import 'firebase/auth';

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
const fbApp = firebase.initializeApp(firebaseConfig);

export const auth = fbApp.auth();
export default fbApp;