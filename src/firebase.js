import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA01WGlnumKMsYXLCn5QYWHmZECVyZ4dig",
    authDomain: "whatsapp-clone-3bb14.firebaseapp.com",
    projectId: "whatsapp-clone-3bb14",
    storageBucket: "whatsapp-clone-3bb14.appspot.com",
    messagingSenderId: "136310920711",
    appId: "1:136310920711:web:01f6fd9bcf0e070a26bca2",
    measurementId: "G-LW0HJFYMBS"
};

 firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;