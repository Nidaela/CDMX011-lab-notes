import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import boyImage from './boyImage.png';
//import googleIcon from './googleIcon.png';
import './Signup.css';

export default function Signup() {

  return (
    <div className="Signup">
      <header className="Signup-header">
        <img src={logo} className="Signup-logo" alt="logo" />
      </header>
      <div className="Signup-Image">
      <img src={boyImage} className="Boy-Image" alt="nimble" />
      </div>
      <div className="Black-Background">
        <div className="Signup-Form">
          <p className="Signup-Text">Sign up</p>
          <div className="Form">
            <input type="email" id="email" placeholder="Enter your email address" required></input>
            <input type="password" id="password" placeholder="Enter your password" required></input>
            <Link to="/board" className="Continue-with-email">Continue with email</Link>
            <p className="Signup-Google">You can also:</p>
            <Link to="/board" className="Continue-with-Google">Continue with Google</Link>
          </div>
        </div>
      </div>
    </div>
  );
}