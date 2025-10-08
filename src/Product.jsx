import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase/Firebase';
import { Link } from 'react-router-dom';
const Product = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        let fetchdata = (async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data());
                let products = querySnapshot.docs.map(doc => doc.data())
                setData(products);
            })
        });
        fetchdata()
    }, [])
    return (
<div className="product-container">
  {data.map((e, i) => (
    <div className="product-card" key={i}>
      <img src={e.url} alt={e.title} />
      <div className="product-info">
        <h1>{e.title}</h1>
        <p>{e.description}</p>
        <span>₹ {e.price}</span>
      </div>
    </div>
  ))}
<div className="back-button-container">
  <Link to={'/admin'}><button className="back-button">Back To Home</button></Link>
</div>
</div>

    );
}
export default Product