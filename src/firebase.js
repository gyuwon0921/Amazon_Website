import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUtFsSfBLcisE6IfGN_3uCc2_LrpEW4Go",
  authDomain: "challenge-58f17.firebaseapp.com",
  projectId: "challenge-58f17",
  storageBucket: "challenge-58f17.appspot.com",
  messagingSenderId: "269441908614",
  appId: "1:269441908614:web:506a9b56c94e016e717607",
  measurementId: "G-H6D06LSPG7"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export { db, auth };