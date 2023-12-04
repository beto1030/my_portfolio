// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzHuepwEkFoI5QzJISd121B8hyaOOewZA",
  authDomain: "optical-flashcards-a6d76.firebaseapp.com",
  projectId: "optical-flashcards-a6d76",
  storageBucket: "optical-flashcards-a6d76.appspot.com",
  messagingSenderId: "930492285594",
  appId: "1:930492285594:web:f780b68efb73f2ef8e9523"
};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore, firebase};

