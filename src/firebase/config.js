import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCY6YcS0JkAW4SVoGq80X9Tt8aDPA9R4hk",
  authDomain: "clone-e71c2.firebaseapp.com",
  projectId: "clone-e71c2",
  storageBucket: "clone-e71c2.appspot.com",
  messagingSenderId: "129045922418",
  appId: "1:129045922418:web:8c24a55cc63e101e1578eb",
  measurementId: "G-9LZCVD3DQJ",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
