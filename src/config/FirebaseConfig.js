import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvO6nEqjmugENtbmF4OK6v-XCndfS71Ec",
  authDomain: "mausooq-425ec.firebaseapp.com",
  projectId: "mausooq-425ec",
  storageBucket: "mausooq-425ec.appspot.com",
  messagingSenderId: "298020524431",
  appId: "1:298020524431:web:587b268e42e9c2203c3bfa",
  measurementId: "G-PMD9VNDF36"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseRealTimeDb = getDatabase(app);
export const firebaseStorage = getStorage(app);
