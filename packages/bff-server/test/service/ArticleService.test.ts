import { ArticleService } from '../../src/service';

describe('ArticleService', () => {
  const articleService = ArticleService('mockArticleRepository');

  describe('listArticles', () => {
    const listArticles = articleService.listArticles;

    test('returns a list of all the articles in the database', () => {
      expect.assertions(2);

      const articlesList = listArticles();

      expect(articlesList.length).toEqual(1);
      expect(articlesList[0].title).toEqual('Title for SEO');
    });
  });
});
