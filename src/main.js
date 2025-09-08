import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKcW5UGP19-2RRXYwNVg4FSzIMe9nBsAE",
    authDomain: "week7zetonghe.firebaseapp.com",
    projectId: "week7zetonghe",
    storageBucket: "week7zetonghe.firebasestorage.app",
    messagingSenderId: "103685219027",
    appId: "1:103685219027:web:af0729f24cf2400bb0ea26"
};

// Initialize Firebase
initializeApp(firebaseConfig);
