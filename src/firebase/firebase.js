// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSVFuI5bkwroMYPXjNGNNG2yB7-WIJ_qY',
  authDomain: 'my-money-775ae.firebaseapp.com',
  projectId: 'my-money-775ae',
  storageBucket: 'my-money-775ae.appspot.com',
  messagingSenderId: '811871030403',
  appId: '1:811871030403:web:f047e5f522a24971ce5fb6',
  measurementId: 'G-G94PV081WN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export async function signInUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
}

export async function signUpUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
}

export async function signOutUser() {
  await signOut(auth);
}

export { auth, db };
