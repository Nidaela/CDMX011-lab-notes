import logo from './logo.png';
import landingPageImage from './landingPageImage.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="App-text">Create notes you won’t forget anymore</p>
      <button className="Get-started-button">Get started</button>
      <img src={landingPageImage} className="Girl-image" alt="nimble" />
    </div>
  );
}

export default App;
