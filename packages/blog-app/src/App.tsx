import React, { useState } from 'react';

import logo from './logo.svg';

import './App.css';

export const App = () => {
  const [apiTestResponse, setApiTestResponse] = useState<string>();

  const handleTestBff = async () => {
    try {
      const response = await fetch('http://localhost:3000/data');
      const jsonData = await response.json();
      setApiTestResponse(jsonData.foo);
    } catch (error) {
      setApiTestResponse('An error has occurred while fetching the data.');
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Blog frontend</p>
        <button onClick={handleTestBff}>Foo</button>
        <p>{apiTestResponse || 'Press the Foo button!'}</p>
      </header>
    </div>
  );
};

export default App;
