import express from 'express';
import { ArticleService } from '../service';

enum Endpoints {
  ARTICLES = '/articles',
  ARTICLE = '/articles/:slug',
}

const Router = express.Router();
// TODO: extract service building somewhere else.
const { listArticles, getArticleBy } = ArticleService('articlesRepository');

Router.get(Endpoints.ARTICLES, (req, res) => {
  res.status(200).json(listArticles());
});

Router.get(Endpoints.ARTICLE, (req, res) => {
  res.status(200).json(getArticleBy(req.params.slug));
});

export { Router, Endpoints };
