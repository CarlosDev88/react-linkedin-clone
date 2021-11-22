import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyA6VE0UkoqumEfKdqMxo1FZNrGw2FQxTdk",
  authDomain: "linkedin-clone-27307.firebaseapp.com",
  projectId: "linkedin-clone-27307",
  storageBucket: "linkedin-clone-27307.appspot.com",
  messagingSenderId: "627697719839",
  appId: "1:627697719839:web:09f29f8a19092e1435532a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
