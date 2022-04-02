import './App.css';

import React from 'react';

const App = () => (
  <div className="container">
    <h1 id="title">This is a ReactTS x Vite x PWA Boilerplate</h1>
    <h2 id="subtext">
      Starting a React PWA project made easier with zero-configuration
      boilerplate.
    </h2>
    <div className="line" />
    <div id="instruction">
      <p>
        <a
          className="link"
          href="https://www.npmjs.com/package/create-react-ts-kit"
          target="_blank"
          rel="noreferrer"
        >
          <code>npm install create-react-ts-kit</code>
        </a>
      </p>
      <div className="line" />
      <p>Edit src/App.tsx to start</p>
      <p>Edit src/App.css to change styles</p>
      <p>Edit manifest.json to change pwa data</p>
    </div>
    <div id="react-logo" />
    <div id="information">
      <p id="footer">
        Know more about me @
        {' '}
        <a
          className="link"
          href="http://www.godfreyzubiaga.com/"
          target="_blank"
          rel="noreferrer"
        >
          Godfrey Zubiaga
        </a>
      </p>
    </div>
  </div>
);

export default App;
