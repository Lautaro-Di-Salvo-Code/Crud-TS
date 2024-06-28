// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6-9kbbEF11-seals-pQQNwYXoNANIyZc",
  authDomain: "crudproject-5614c.firebaseapp.com",
  projectId: "crudproject-5614c",
  storageBucket: "crudproject-5614c.appspot.com",
  messagingSenderId: "179551579502",
  appId: "1:179551579502:web:c388cc5354dc855139657f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 
export const database = getFirestore(app)