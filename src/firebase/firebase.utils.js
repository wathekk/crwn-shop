import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_7ZC1AZWvdN6A4Falc9pW3lystyzUPhI",
  authDomain: "crwn-db-931e4.firebaseapp.com",
  databaseURL: "https://crwn-db-931e4.firebaseio.com",
  projectId: "crwn-db-931e4",
  storageBucket: "crwn-db-931e4.appspot.com",
  messagingSenderId: "424667792993",
  appId: "1:424667792993:web:edb7b86fa653aa5e140c20",
  measurementId: "G-M92SP76ZT2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
