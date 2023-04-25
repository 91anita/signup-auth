// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfdQ0lff6Uv0Dm8JTEoVkEJUChNdUUhT4",
  authDomain: "react-firebase-auth-f60b6.firebaseapp.com",
  projectId: "react-firebase-auth-f60b6",
  storageBucket: "react-firebase-auth-f60b6.appspot.com",
  messagingSenderId: "847875479969",
  appId: "1:847875479969:web:1ffc40a086ceccfbc513e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};