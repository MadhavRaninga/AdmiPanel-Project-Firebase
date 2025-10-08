import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
const Signin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const auth = getAuth();
    let handleSign = (() => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);

                });
            alert("Log In Successfully..")
        }
        else{
            alert("Please Enter User Email or Password !")
        }
        setEmail("")
        setPassword("")
    })
     return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Sign In</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Link to={'/admin'}><button className="signup-btn" onClick={handleSign}>Sign In</button></Link>
      </div>
    </div>
  )
}

export default Signin