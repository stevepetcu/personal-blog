import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Article, ArticleResponse } from '../../../models';

interface ArticleScreenParams {
  slug: string;
}

const ArticleScreen = () => {
  const pathParams: ArticleScreenParams = useParams() as unknown as ArticleScreenParams;
  const navigate = useNavigate();

  if (!pathParams.slug) {
    navigate('/404'); // TODO: replace with throwing an Exception and handling it in an ErrorBoundary.
  }

  const [article, setArticle] = useState<Article>();
  const [articleSections, setArticleSections] = useState<JSX.Element[]>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`http://localhost:3000/articles/${pathParams.slug}`);
      const jsonData: ArticleResponse = await response.json();
      const publishAt = new Date(jsonData.publishAt);
      const createdAt = new Date(jsonData.createdAt);
      const updatedAt = new Date(jsonData.updatedAt);

      const article = { ...jsonData, publishAt, createdAt, updatedAt };
      article.sections.sort((first, second) => second.index - first.index);

      const sections = article.sections.map((section) => {
        return (
          <section key={section.header.anchor}>
            <h2 id={section.header.anchor}>{section.header.heading}</h2>
            {section.image && <img src={section.image?.url} title={section.image?.alt} alt={section.image?.alt} />}
            <p>{section.content}</p>
            <hr />
          </section>
        );
      });

      setArticle(article);
      setArticleSections(sections);
    };

    fetchArticle().catch((error) => {
      setError(error);
      console.log(error);
    });
  }, []);

  return (
    <div>
      {error ? (
        <p>An error has occurred!</p>
      ) : article ? (
        <article>
          <div>
            {article.header.image && (
              <img src={article.header.image?.url} title={article.header.image?.alt} alt={article.header.image?.alt} />
            )}
          </div>
          <div>
            <h1>{article.header.heading}</h1>
          </div>
          <>{articleSections || <p>Loading article content…</p>}</>
          <hr />
          <hr />
          <div>{article.footer?.content}</div>
        </article>
      ) : (
        <p>Loading article…</p>
      )}
    </div>
  );
};

export default ArticleScreen;
