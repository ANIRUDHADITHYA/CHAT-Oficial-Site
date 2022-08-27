import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: "chat-integration-303ae",
    storageBucket: "chat-integration-303ae.appspot.com",
    messagingSenderId: "869375830492",
    appId: "1:869375830492:web:79ebce05d63e439bdf0719",
    measurementId: "G-7YJ0Z5LZ5L"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app)

  export const auth = getAuth(app)

  export const db = getFirestore(app)


  {/*ChatOfficial config

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdrlJXrPO-or5bbr-YUu2ud6m6MkMOLng",
  authDomain: "chatofficialsite.firebaseapp.com",
  projectId: "chatofficialsite",
  storageBucket: "chatofficialsite.appspot.com",
  messagingSenderId: "848505313734",
  appId: "1:848505313734:web:f3b67a165e1a702ac4bac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/}

   