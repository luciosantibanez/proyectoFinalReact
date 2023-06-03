import {initializeApp} from 'firebase/app'
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBi00MfqUoRqZlH4GMxQ0HF4nTSLfBrhLQ",
    authDomain: "ergo-f4f95.firebaseapp.com",
    projectId: "ergo-f4f95",
    storageBucket: "ergo-f4f95.appspot.com",
    messagingSenderId: "1030236219518",
    appId: "1:1030236219518:web:281da02d9fac6ea528d02f",
    measurementId: "G-F9Q4KLMWMP"
};

initializeApp(firebaseConfig);
export default firebase;