import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyC5fFZwH1pv6MiugekESMPdcSKqdrkHIug",
    authDomain: "phonestone-52e84.firebaseapp.com",
    projectId: "phonestone-52e84",
    storageBucket: "phonestone-52e84.appspot.com",
    messagingSenderId: "3806588443",
    appId: "1:3806588443:web:e26e4b271f6013b53512be",
    measurementId: "G-GHJQKYP2QD"
  };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
