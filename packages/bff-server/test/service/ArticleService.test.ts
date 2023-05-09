import { ArticleService } from '../../src/service';

describe('ArticleService', () => {
  const articleService = ArticleService('mockArticleRepository');

  describe('listArticles', () => {
    const listArticles = articleService.listArticles;

    test('returns a list of summaries of all the articles in the database', () => {
      expect.assertions(1);

      const articlesList = listArticles();

      expect(articlesList.length).toEqual(5);
      // TODO: find a way to generate fake data, add it to the DB and share it with the tests (and between the FE and BE).
    });
  });
});
