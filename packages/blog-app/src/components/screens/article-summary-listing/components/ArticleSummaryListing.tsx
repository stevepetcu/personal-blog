import { FunctionComponent } from 'react';

import { ArticleSummary } from '../../../../models';

interface ArticleSummaryListingProps {
  articleSummaries: ArticleSummary[];
}

const ArticleSummaryListing: FunctionComponent<ArticleSummaryListingProps> = ({ articleSummaries }) => {
  articleSummaries.sort((first, second) => second.publishAt.getTime() - first.publishAt.getTime());

  const renderedArticleList = articleSummaries.map(
    ({ header: { heading, image }, publishAt, updatedAt, summary, uniqueSlug }) => (
      <>
        <dt>Heading: {heading}</dt>
        <dd>
          <p>Summary:</p>
          <p>{summary}</p>
          <p>Published at: {publishAt.toDateString()}</p>
          <p>Updated at: {updatedAt.toDateString()}</p>
          <p>Unique slug: {uniqueSlug}</p>
          <p>Header image:</p>
          {image && <img src={image?.thumbnailUrl} title={image?.alt} alt={image?.alt} />}
        </dd>
        <hr />
      </>
    ),
  );

  return (
    <div>
      <h1>Article listing</h1>
      <dl>{renderedArticleList}</dl>
    </div>
  );
};

export default ArticleSummaryListing;
