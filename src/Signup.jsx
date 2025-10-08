import React, { useState, } from 'react'
import { auth } from './Firebase/Firebase'  // ✅ use the initialized auth
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

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
    let handleGoogleSignIn = (() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token, user);
                navigate('/admin')
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential);
            });
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

                <div className="divider">
                    <span>or</span>
                </div>

                <button className="google-btn" onClick={handleGoogleSignIn}>
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Signup