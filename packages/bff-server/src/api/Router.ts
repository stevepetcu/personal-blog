import express from 'express';
import { ArticleService } from '../service';

enum Endpoints {
  ARTICLES = '/articles',
}

const Router = express.Router();
// TODO: extract service building somewhere else.
const { listArticles } = ArticleService('articlesRepository');

Router.get(Endpoints.ARTICLES, (req, res) => {
  res.status(200).json(listArticles());
});

export { Router, Endpoints };
