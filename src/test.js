import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("v41IBFxDP06U08FhypKV")
  .collection("cartItems")
  .doc("PINQ4MjaE8dbHwf7ZoXG");
firestore.doc("/users/v41IBFxDP06U08FhypKV/cartItems/PINQ4MjaE8dbHwf7ZoXG"); // to get item
firestore.collection("/users/v41IBFxDP06U08FhypKV/cartItems"); //to get collection
