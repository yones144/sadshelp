// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB32vGflJ82W2X9w_n9zjOkr1NeZinuER8",
  authDomain: "yones-5c807.firebaseapp.com",
  projectId: "yones-5c807",
  storageBucket: "yones-5c807.appspot.com",
  messagingSenderId: "789685354526",
  appId: "1:789685354526:web:c991dc9606c5fa0073ae0f",
  measurementId: "G-SCXZQJ0CJ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };