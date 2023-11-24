
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmHbXJjoLlPpR7kjys0gz1YrIF-XsLjFY",
  authDomain: "health-lab-1.firebaseapp.com",
  projectId: "health-lab-1",
  storageBucket: "health-lab-1.appspot.com",
  messagingSenderId: "759439346100",
  appId: "1:759439346100:web:dc4acd3b143ff24bf10ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

