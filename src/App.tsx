import './App.css';

import React from 'react';

const App = () => (
  <div className="container">
    <h1 id="title">This is a ReactJS with Parcel Boilerplate</h1>
    <h2 id="subtext">
      Starting a React project made easier with zero-configuration boilerplate.
    </h2>
    <span id="line" />
    <div id="instruction">
      <p>Edit src/App.jsx to start</p>
      <p>Edit src/App.css to change styles</p>
    </div>
    <div id="react-logo" />
    <div id="information">
      <p>
        More information about ReactJS @
        <a className="link" href="https://reactjs.org/" target="_blank" rel="noreferrer">
          Official ReactJS Website
        </a>
      </p>
      <p id="footer">
        You can know more about me @
        <a
          className="link"
          href="http://www.godfreyzubiaga.com/"
          target="_blank"
          rel="noreferrer"
        >
          My Portfolio
        </a>
      </p>
    </div>
  </div>
);

export default App;
