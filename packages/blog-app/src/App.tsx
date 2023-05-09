import React, { useState } from 'react';

import ArticleSummaryListing from './components/screens/article-summary-listing/components/ArticleSummaryListing';
import logo from './logo.svg';
import { Article } from './models';

import './App.css';

const App = () => {
  const [apiTestResponse, setApiTestResponse] = useState<Article[]>();
  const [error, setError] = useState<unknown>();

  const handleTestBff = async () => {
    try {
      const response = await fetch('http://localhost:3000/articles');
      const jsonData = await response.json();
      setApiTestResponse(jsonData);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Blog frontend</p>
        <button onClick={handleTestBff}>All articles</button>
        {error ? (
          <p>An error has occurred!</p>
        ) : apiTestResponse ? (
          <ArticleSummaryListing articleSummaries={apiTestResponse}></ArticleSummaryListing>
        ) : (
          <p>Get all the articles!</p>
        )}
      </header>
    </div>
  );
};

export default App;
