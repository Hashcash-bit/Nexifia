// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjenSJ6SA6N7iLgyzKlLkOuR-Cq-jBXoo",
  authDomain: "nex-proof-of-concept.firebaseapp.com",
  projectId: "nex-proof-of-concept",
  storageBucket: "nex-proof-of-concept.appspot.com",
  messagingSenderId: "560109874638",
  appId: "1:560109874638:web:b9314c11fc68f67d5a4f9f",
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = getFirestore(firebase_app);
