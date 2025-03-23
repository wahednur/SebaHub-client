// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6lHgC5LRWXzyf9RY6CPaOkcw3Qa4QEf4",
  authDomain: "assignment-11-2fe61.firebaseapp.com",
  projectId: "assignment-11-2fe61",
  storageBucket: "assignment-11-2fe61.firebasestorage.app",
  messagingSenderId: "291890630945",
  appId: "1:291890630945:web:b73157b838d8573e2e2e60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
