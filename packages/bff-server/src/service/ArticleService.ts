import { type Article } from '../models';

interface ArticleServiceInterface {
  listArticles: () => Article[];
  getArticleBy: (uniquePath: string) => Article | null;
}

// TODO:
//  1. Inject articles DB repository.
//  2. Paginate articles list.

export const ArticleService = (
  articlesRepository: string,
): ArticleServiceInterface => {
  const listArticles = (): Article[] => {
    return [
      {
        id: 'article-asdf1',
        index: 0,
        author: 'Stefan',
        title: 'Title for SEO',
        description: 'Short description for SEO',
        summary: 'Summary for display in list views',
        header: {
          heading: 'A mock article',
          image: {
            url: 'https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            alt: 'A bird perched on a twig with pink flowers all around.',
          },
        },
        sections: [
          {
            id: 'section-qwer1',
            index: 0,
            heading: 'My first section',
            content: 'Some content…',
            image: {
              url: 'https://images.pexels.com/photos/268496/pexels-photo-268496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              alt: 'A bird perched on a twig with white flowers all around.',
            },
          },
          {
            id: 'section-qwer2',
            index: 0,
            heading: 'My second section',
            content: 'Some other content…',
          },
        ],
        footer: {
          content: 'Reference 1',
        },
        version: 0,
        uniquePath: 'a-mock-article',
        published: true,
        publishAt: new Date(1683018291445),
        createdAt: new Date(1683018291440),
        updatedAt: new Date(1683018291440),
      },
    ];
  };

  const getArticleBy = (uniquePath: string): Article | null => {
    return null;
  };

  return { listArticles, getArticleBy };
};
