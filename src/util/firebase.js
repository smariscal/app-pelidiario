// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmQTaF-8QEsoJ2MQyaPdKERef3n-mta0E",
  authDomain: "pelidiario.firebaseapp.com",
  projectId: "pelidiario",
  storageBucket: "pelidiario.appspot.com",
  messagingSenderId: "513033174672",
  appId: "1:513033174672:web:c354b77ad1671e6dc62215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initializa Firestore
const db = getFirestore(app);

export default db;