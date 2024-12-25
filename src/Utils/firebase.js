// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfbFV6vM4AbMw4BYYrG9gVnmcAAxNpFsA",
  authDomain: "netflixgpt-29d4a.firebaseapp.com",
  projectId: "netflixgpt-29d4a",
  storageBucket: "netflixgpt-29d4a.firebasestorage.app",
  messagingSenderId: "644639574411",
  appId: "1:644639574411:web:40c53fc87cdff7d0e9c78e",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
