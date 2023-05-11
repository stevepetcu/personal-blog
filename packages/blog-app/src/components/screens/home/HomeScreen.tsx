import { useState } from 'react';

import logo from '../../../logo.svg';
import { ArticleSummary, ArticleSummaryResponse } from '../../../models';
import ArticleSummaryListing from '../article-summary-listing/components/ArticleSummaryListing';

const HomeScreen = () => {
  const [articleSummaries, setArticleSummaries] = useState<ArticleSummary[]>();
  const [error, setError] = useState<unknown>();

  const handleTestBff = async () => {
    try {
      const response = await fetch('http://localhost:3000/articles');
      const jsonData = await response.json();
      const articleSummaries: ArticleSummary[] = jsonData.map((articleSummaryResponse: ArticleSummaryResponse) => {
        const publishAt = new Date(articleSummaryResponse.publishAt);
        const createdAt = new Date(articleSummaryResponse.createdAt);
        const updatedAt = new Date(articleSummaryResponse.updatedAt);

        return { ...articleSummaryResponse, publishAt, createdAt, updatedAt };
      });
      setArticleSummaries(articleSummaries);
    } catch (error) {
      setError(error);
      console.log(error);
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
        ) : articleSummaries ? (
          <ArticleSummaryListing articleSummaries={articleSummaries}></ArticleSummaryListing>
        ) : (
          <p>Get all the articles!</p>
        )}
      </header>
    </div>
  );
};

export default HomeScreen;
