import React, { useState, } from 'react'
import { auth } from './Firebase/Firebase'  // ✅ use the initialized auth
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let handleSignup = (() => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
            alert("Sign Up Successfull..")
            navigate('/signin')
        }
        else {
            alert("Please Enter Email or Password !")
        }
        setEmail("")
        setPassword("")
    })


    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <h2 className="signup-title">Create Account</h2>
                <div className="input-box">
                    <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
                <p className="login-redirect">
                    Already have an account?{" "}
                    <Link to={'/signin'}><a href="" className="login-link">Login</a></Link>
                </p>
              
            </div>
        </div>
    )
}

export default Signup