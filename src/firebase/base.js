import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSmHU73ae_rl6FDkHcKtu1WIhVV10DWY",
  authDomain: "facebook-and-gg-authentication.firebaseapp.com",
  projectId: "facebook-and-gg-authentication",
  storageBucket: "facebook-and-gg-authentication.appspot.com",
  messagingSenderId: "765213440048",
  appId: "1:765213440048:web:b5dc79733cd68514b955f5",
  measurementId: "G-YNLFMZKS0C",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
