import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2mw509hjjZTO7i5lsOcU3EKIwsEDlFLA",
  authDomain: "netflix-clone-8970d.firebaseapp.com",
  projectId: "netflix-clone-8970d",
  storageBucket: "netflix-clone-8970d.appspot.com",
  messagingSenderId: "365524677820",
  appId: "1:365524677820:web:f32a59b6465de5fc80ccb9",
  measurementId: "G-KM5GT15LR8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
