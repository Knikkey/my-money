import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF7wMmZ7U0hF-JCbNpFfeNaUI8DKKIOlU",
  authDomain: "mymoney-391ce.firebaseapp.com",
  projectId: "mymoney-391ce",
  storageBucket: "mymoney-391ce.appspot.com",
  messagingSenderId: "390428014025",
  appId: "1:390428014025:web:05a5f55e79dd5b842ea418",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
