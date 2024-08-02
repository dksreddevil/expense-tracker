// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWhflKPHxGwYh6INGDD0m-zzUX1XCpZVQ",
  authDomain: "expense-tracker-21fc4.firebaseapp.com",
  projectId: "expense-tracker-21fc4",
  storageBucket: "expense-tracker-21fc4.appspot.com",
  messagingSenderId: "30265322250",
  appId: "1:30265322250:web:3c4516fba8c6663b8f68f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
