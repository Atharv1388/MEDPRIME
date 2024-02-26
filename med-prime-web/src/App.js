//E:\MEDPRIME\med-prime-web\src\App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          MedPrime
        </div>
        <div className="right-nav">
          <a href="#about">About Us</a>
          <a href="#login">Log In</a>
        </div>
      </nav>
      <div className="main-content">
        <h1>Welcome to MedPrime</h1>
        {/* Additional content can be added here */}
      </div>
      <footer>
        <p>&copy; MedPrime. All rights reserved. | <a href="#terms">Terms and Conditions</a></p>
      </footer>
    </div>
  );
}

export default App;