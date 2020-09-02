import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKjRw2gouBobRRtRRqGZ8zLL1RYRlivkI",
  authDomain: "leopardi-db.firebaseapp.com",
  databaseURL: "https://leopardi-db.firebaseio.com",
  projectId: "leopardi-db",
  storageBucket: "leopardi-db.appspot.com",
  messagingSenderId: "642647066737",
  appId: "1:642647066737:web:c0023c783c379d8081f3d0",
  measurementId: "G-TMW949LT1H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
