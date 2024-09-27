// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-tIztuF8YEdbdXQegGKDW_Q9rQGbLJGk",
  authDomain: "datacharge-cb251.firebaseapp.com",
  projectId: "datacharge-cb251",
  storageBucket: "datacharge-cb251.appspot.com",
  messagingSenderId: "551050792129",
  appId: "1:551050792129:web:e99cc5d10534c7fe9bd840",
  measurementId: "G-JSEMR5E2JV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });

  return user;
};
