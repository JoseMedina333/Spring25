import { app } from "./app.js"; 
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app); 

const dreamsCollection = collection(db, "hopesdreams"); 

const dreamsRef = document.querySelector("#dreams"); 

async function getDreams() { 
  const dreamsDocs = await getDocs(dreamsCollection); 

  dreamsRef.innerHTML = ""; 
  
  for (let i = 0; i < dreamsDocs.docs.length; i++) { 
    const currentDream = dreamsDocs.docs[i]; 
    console.log(currentDream.id, currentDream.data()); 

    const dreamData = currentDream.data(); 
    dreamsRef.innerHTML += "<li>" + dreamData.text + "</li>"; 
  } 
} 

async function addNewDream (e) {
    e.preventDefault();

    const dreamTextValue = dreamTextRef.value;

    if(dreamTextValue.trim()==""){
      alert("Please enter a valid dream");
    }else{

    }

    const newDream = await addDoc(dreamsCollection,{text:dreamTextValue});

    console.log(newDream);
}

dreamFormRef.onsubmit = addNewdream;

dreamFormRef.reset()

getDreams();