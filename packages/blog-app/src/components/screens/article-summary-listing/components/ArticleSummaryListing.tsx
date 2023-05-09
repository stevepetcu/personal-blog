import { FC } from 'react';

import { ArticleSummary } from '../../../../models';

interface ArticleListingProps {
  articleSummaries: ArticleSummary[];
}

const ArticleSummaryListing: FC<ArticleListingProps> = ({ articleSummaries }) => {
  articleSummaries.sort((first, second) => second.publishAt - first.publishAt);

  const renderedArticleList = articleSummaries.map((articleSummary) => (
    <>
      <dt>Heading: {articleSummary.header.heading}</dt>
      <dd>
        <p>Summary:</p>
        <p>{articleSummary.summary}</p>
        <p>Published at: {new Date(articleSummary.publishAt).toDateString()}</p>
        <p>Updated at: {new Date(articleSummary.publishAt).toDateString()}</p>
        <p>Unique slug: {articleSummary.uniqueSlug}</p>
        <p>Header image:</p>
        {articleSummary.header.image && (
          <img
            src={articleSummary.header.image?.url}
            title={articleSummary.header.image?.alt}
            alt={articleSummary.header.image?.alt}
          />
        )}
      </dd>
      <hr />
    </>
  ));

  return (
    <div>
      <h1>Article listing</h1>
      <dl>{renderedArticleList}</dl>
    </div>
  );
};

export default ArticleSummaryListing;
