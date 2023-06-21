import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-aJX_Rfo3_MWRxmPFdot5rG3c00yN2Xc",
  authDomain: "netflix-clone-8e671.firebaseapp.com",
  projectId: "netflix-clone-8e671",
  storageBucket: "netflix-clone-8e671.appspot.com",
  messagingSenderId: "1015100097534",
  appId: "1:1015100097534:web:cce9d5f37028310c2736af",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
