// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firbase.auth();

export { auth };
