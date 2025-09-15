import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKcW5UGP19-2RRXYwNVg4FSzIMe9nBsAE",
    authDomain: "week7zetonghe.firebaseapp.com",
    projectId: "week7zetonghe",
    storageBucket: "week7zetonghe.firebasestorage.app",
    messagingSenderId: "103685219027",
    appId: "1:103685219027:web:af0729f24cf2400bb0ea26"
};

initializeApp(firebaseConfig);
const db = getFirestore()
export default db