/* fichier main.ts */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import persistedState from "pinia-plugin-persistedstate";


//https://monapplicatiovue-default-rtdb.europe-west1.firebasedatabase.app/


//import { firebaseApp } from './store/firebase'
//console.log(firebaseApp);

const pinia = createPinia();
pinia.use(persistedState);

const app = createApp(App).use(pinia).use(router)


app.mount('#app')
