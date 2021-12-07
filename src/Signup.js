import React from 'react';
import logo from './logo.png';
import boyImage from './boyImage.png';
import googleIcon from './googleIcon.png';
import './Signup.css';

function Signup() {
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
            <button className="Continue-with-email">Continue with email</button>
            <p className="Signup-Google">You can also:</p>
            <button className="Continue-with-Google"><img src={googleIcon} className="Google-Icon" alt="google" />Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;