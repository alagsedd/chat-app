// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYGVCR4ctHYy0dMZ-C58S4iC-wktyH8u8",
  authDomain: "chat-app-156cb.firebaseapp.com",
  projectId: "chat-app-156cb",
  storageBucket: "chat-app-156cb.appspot.com",
  messagingSenderId: "955868672446",
  appId: "1:955868672446:web:8567033ce4580702dc49ef",
  measurementId: "G-CX9D6CM765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export const gitHubProvider = new GithubAuthProvider()
export const database = getFirestore(app)
export const databaseCollectionRef = collection(database, "messages");
