import { FC } from 'react';

import { ArticleSummary } from '../../../../models';

interface ArticleListingProps {
  articleSummaries: ArticleSummary[];
}

const ArticleSummaryListing: FC<ArticleListingProps> = ({ articleSummaries }) => {
  articleSummaries.sort((first, second) => second.publishAt - first.publishAt);

  const renderedArticleList = articleSummaries.map(({ header: { heading, image }, publishAt, summary, uniqueSlug }) => (
    <>
      <dt>Heading: {heading}</dt>
      <dd>
        <p>Summary:</p>
        <p>{summary}</p>
        <p>Published at: {new Date(publishAt).toDateString()}</p>
        <p>Updated at: {new Date(publishAt).toDateString()}</p>
        <p>Unique slug: {uniqueSlug}</p>
        <p>Header image:</p>
        {image && <img src={image?.url} title={image?.alt} alt={image?.alt} />}
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
