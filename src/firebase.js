// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCA9sxE-zFHKyEMYg1qeK52sXrM69f_8CM",
    authDomain: "clone-1b40a.firebaseapp.com",
    projectId: "clone-1b40a",
    storageBucket: "clone-1b40a.appspot.com",
    messagingSenderId: "931429069156",
    appId: "1:931429069156:web:750c9b871b1c1d89c34a71",
    measurementId: "G-KKXX8N78ZP"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

const auth=firebase.auth();

export {db,auth};