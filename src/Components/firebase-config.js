import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEhwvO-M0PL2BMSZMnNyU17ESxtNUcWkA",
  authDomain: "saarthi1.firebaseapp.com",
  databaseURL: "https://saarthi1-default-rtdb.firebaseio.com",
  projectId: "saarthi1",
  storageBucket: "saarthi1.appspot.com",
  messagingSenderId: "562962846459",
  appId: "1:562962846459:web:c6a933c4029bd10462d65e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);