import React from 'react';
// import logo from './logo.svg';
import avatar from './avatar.png'
import './App.css';
import FloatingBox from './FloatingBox';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-6xl font-bold">Hi, I'm Warren Wang</h1>
        <img src={avatar} className="App-logo" alt="logo" />
      </header>
      <body>
        <LandingPage></LandingPage>
      </body>
    </div>

  );
}

export default App;
