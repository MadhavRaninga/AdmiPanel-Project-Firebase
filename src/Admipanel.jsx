import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './Firebase/Firebase';
import { Link } from 'react-router-dom';
const Admipanel = () => {
let [imgUrl, setImgUrl] = useState("")
  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [price, setPrice] = useState("")
  let handleAdd = (async () => {
    try {
      if (imgUrl !== "" && title  !== "" && description !== "" && price !== "") {
        const docRef = await addDoc(collection(db, "users"), {
          url: imgUrl,
          title: title,
          description: description,
          price : price
        });
        console.log("Document written with ID: ", docRef.id);
      }
      else {
        alert("Please Enter Student Data !")
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setImgUrl("")
    setTitle("")
    setDescription("")
    setPrice("")
  })

  return (
    <div className="form-container">
      <input type="text" placeholder='Product ImageUrl' onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
      <input type="text" placeholder='Product Title' onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="text" placeholder='Product Description' onChange={(e) => setDescription(e.target.value)} value={description} />
      <input type="text" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} value={price} />
      <button onClick={handleAdd}>Add</button>
      <Link to={'/product'}><button className='view'>View Product</button></Link>
    </div>
  );
}

export default Admipanel