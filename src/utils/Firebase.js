// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBehe3wkkj0LARlMiCBTFQejLMsUGWCX5E",
  authDomain: "netlixgpt-680a1.firebaseapp.com",
  projectId: "netlixgpt-680a1",
  storageBucket: "netlixgpt-680a1.appspot.com",
  messagingSenderId: "723114650861",
  appId: "1:723114650861:web:b47441ab4ff33e46a5f0e4",
  measurementId: "G-XXCGLL53CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();