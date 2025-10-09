import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase/Firebase';
const Signin = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()
  let handleSign = (() => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("Log In Successfully..")
          navigate('/admin')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("Invalid Email or Password !")
        });
    }
    else {
      alert("Please Enter User Email or Password !")
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

        <button className="signup-btn" onClick={handleSign}>Sign In</button>

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

export default Signin