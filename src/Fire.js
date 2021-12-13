// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX3Dw0IN-RL0gsKpLSx28fppqSQWmEGFw",
  authDomain: "recipefork-3e573.firebaseapp.com",
  projectId: "recipefork-3e573",
  storageBucket: "recipefork-3e573.appspot.com",
  messagingSenderId: "396274049835",
  appId: "1:396274049835:web:862e0256910d2a3b6e1b6e",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);