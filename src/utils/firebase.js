
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8Hxf6cwxN5yl2Lekxkkwk7vTTaoGmJS8",
  authDomain: "mesadulce-collection.firebaseapp.com",
  projectId: "mesadulce-collection",
  storageBucket: "mesadulce-collection.appspot.com",
  messagingSenderId: "758213327987",
  appId: "1:758213327987:web:8bae7a75fa1805025fbe06"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 