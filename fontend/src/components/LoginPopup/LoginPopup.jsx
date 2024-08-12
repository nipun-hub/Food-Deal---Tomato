import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setcurrentState] = useState('Sign Up');
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" srcset="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === 'Sign Up' ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the thems of use & privacy policy</p>
                </div>
                <div className="login-popup-reaction">
                {currentState === "Login"
                    ? <p>Create a new account ? <span onClick={()=>setcurrentState("Sign Up")}>Click Here</span></p>
                    : <p>Alredy have and account <span onClick={()=>setcurrentState("Login")}>Login here</span></p>
                }
                </div>
            </form>
        </div>
    )
}

export default LoginPopup
