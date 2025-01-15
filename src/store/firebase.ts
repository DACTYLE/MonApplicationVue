import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpOpaBVxaSDKBsLTqyvIhl-bql_E1LO10",
    authDomain: "monapplicatiovue.firebaseapp.com",
    databaseURL: "https://monapplicatiovue-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "monapplicatiovue",
    storageBucket: "monapplicatiovue.firebasestorage.app",
    messagingSenderId: "548478357171",
    appId: "1:548478357171:web:7f843c8c100ed17bb62ac6"
  };

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
export const tasksRef = collection(db, 'Tasks')