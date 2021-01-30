import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA01WGlnumKMsYXLCn5QYWHmZECVyZ4dig",
    authDomain: "whatsapp-clone-3bb14.firebaseapp.com",
    projectId: "whatsapp-clone-3bb14",
    storageBucket: "whatsapp-clone-3bb14.appspot.com",
    messagingSenderId: "136310920711",
    appId: "1:136310920711:web:01f6fd9bcf0e070a26bca2",
    measurementId: "G-LW0HJFYMBS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;