import React from 'react';
import logo from './logo.png';
import landingPageImage from './landingPageImage.png';
import './Welcome.css';

function Welcome() {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={logo} className="Welcome-logo" alt="logo" />
      </header>
      <p className="Welcome-text">Create notes you won’t forget anymore</p>
      <button className="Get-started-button">Get started</button>
      <img src={landingPageImage} className="Girl-image" alt="nimble" />
    </div>
  );
}

export default Welcome;
