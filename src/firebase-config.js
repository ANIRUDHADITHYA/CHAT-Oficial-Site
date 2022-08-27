import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
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
