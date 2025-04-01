import { app } from "./app.js"; 

import {
getFirestore,
collection,
getDoc,

} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"; 


const db = getFirestore(app);

const hadCollection = collection(db, "hopesdreams");


async function getDream() {
    const dreamDocs = await getDocs (dreamCollection)
}