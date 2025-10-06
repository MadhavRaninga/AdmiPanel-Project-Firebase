import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './Firebase/Firebase';
import './App.css'
const App = () => {
  let [name, setName] = useState("")
  let [surname, setSurname] = useState("")
  let [age, setAge] = useState(null)
  let handleAdd = (async () => {
    try {
      if(name !== "" && surname !== "" && age !== "" ){
      const docRef = await addDoc(collection(db, "users"), {
          name : name,
          surname : surname,
          age : age
        });
        console.log("Document written with ID: ", docRef.id);
      }
      else{
        alert("Please Enter Student Data !")
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setName("")
    setSurname("")
    setAge("")
  })

 return (
  <div className="form-container">
    <input type="text" placeholder='Student Name' onChange={(e)=>setName(e.target.value)} value={name} />
    <input type="text" placeholder='Student Surname' onChange={(e)=>setSurname(e.target.value)} value={surname} />
    <input type="text" placeholder='Student Age' onChange={(e)=>setAge(e.target.value)} value={age} />
    <button onClick={handleAdd}>Add</button>
  </div>
);

}

export default App