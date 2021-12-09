import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import landingPageImage from './landingPageImage.png';
import './Home.css';

export default function Home() {
    
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
      <p className="Home-text">Create notes you won’t forget anymore</p>
      <Link to="/signup" className="Get-started-button">Get started</Link>
      <img src={landingPageImage} className="Girl-image" alt="nimble" />
    </div>
  );
} 