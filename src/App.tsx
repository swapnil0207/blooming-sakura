import React from 'react';
import logo from './logo.svg';
import Header from './Common/Header/Header';
import './App.css';

function App() {
  return (
    <>
    <Header></Header>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Blooming Sakura</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
