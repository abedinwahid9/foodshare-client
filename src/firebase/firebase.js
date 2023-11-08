// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVIAwM-et8WsdiN3uGwzIa-UEwGsGmgOQ",
  authDomain: "food-community-4fd43.firebaseapp.com",
  projectId: "food-community-4fd43",
  storageBucket: "food-community-4fd43.appspot.com",
  messagingSenderId: "490315587845",
  appId: "1:490315587845:web:612a5c764cbae53b4f176c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
