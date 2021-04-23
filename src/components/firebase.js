import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFK2vx704MXrbqhpFBI18J4DR5PEFe-kM",
  authDomain: "avranic-71d97.firebaseapp.com",
  projectId: "avranic-71d97",
  storageBucket: "avranic-71d97.appspot.com",
  messagingSenderId: "484537030476",
  appId: "1:484537030476:web:bd59fa460beb5c122721e9",
  measurementId: "G-QGSM7T7BZ0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
