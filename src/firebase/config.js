// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArQhZTzVYyHlH56cX2xqIuWZUB8qa8S-A",
  authDomain: "martial-geeks.firebaseapp.com",
  projectId: "martial-geeks",
  storageBucket: "martial-geeks.appspot.com",
  messagingSenderId: "676837424754",
  appId: "1:676837424754:web:9ab3d0569aa86b7d420ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const productsDataBase = getFirestore(app)