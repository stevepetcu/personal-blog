import { type Article, type ArticleSummary } from '../models';

import { faker } from '@faker-js/faker';

interface ArticleServiceInterface {
  listArticles: () => ArticleSummary[];
  getArticleBy: (uniqueSlug: string) => Article | null;
}

// TODO:
//  1. Inject articles DB repository.
//  2. Paginate articles list.

export const ArticleService = (
  articlesRepository: string,
): ArticleServiceInterface => {
  const generateFakeArticle = (timestamp: number): Article => {
    // TODO: replace with a fake database.
    return {
      id: faker.datatype.uuid(),
      author: 'Stefan',
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      summary: faker.lorem.paragraph(2),
      header: {
        heading: faker.lorem.words(3),
        image: {
          url: faker.image.cats(320, 240, true),
          alt: faker.lorem.sentence(5),
        },
      },
      sections: [
        {
          id: faker.datatype.uuid(),
          index: faker.datatype.number({ min: 0, max: 10 }),
          header: {
            heading: faker.lorem.words(3),
            anchor: `#${faker.lorem.slug(3)}`,
          },
          content: faker.lorem.paragraphs(3),
          image: {
            url: faker.image.cats(),
            alt: faker.lorem.sentence(5),
          },
        },
        {
          id: faker.datatype.uuid(),
          index: faker.datatype.number({ min: 0, max: 10 }),
          header: {
            heading: faker.lorem.words(3),
            anchor: `#${faker.lorem.slug(3)}`,
          },
          content: faker.lorem.paragraphs(3),
        },
      ],
      footer: {
        content: faker.lorem.paragraphs(3),
      },
      version: faker.datatype.number({ min: 0, max: 5 }),
      uniqueSlug: faker.lorem.slug(faker.datatype.number({ min: 2, max: 5 })),
      published: true, // TODO: should filter based on this and other attributes
      publishAt: timestamp,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
  };
  const generateFakeArticleSummaryList = (): ArticleSummary[] => {
    // TODO: replace with a fake database.
    const articleSummaries: ArticleSummary[] = [];

    for (let i = 5; i > 0; i--) {
      const timestamp = faker.date.recent(10).getTime();
      const article = generateFakeArticle(timestamp);

      articleSummaries.push({
        id: article.id,
        author: article.author,
        summary: article.summary,
        header: article.header,
        uniqueSlug: article.uniqueSlug,
        publishAt: article.publishAt,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      });
    }

    return articleSummaries;
  };
  const listArticles = (): ArticleSummary[] => {
    return generateFakeArticleSummaryList();
  };

  const getArticleBy = (uniqueSlug: string): Article | null => {
    return null;
  };

  return { listArticles, getArticleBy };
};
