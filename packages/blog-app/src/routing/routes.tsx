import { Navigate, useRoutes } from 'react-router-dom';

import ArticleScreen from '../components/screens/article/ArticleScreen';
import HomeScreen from '../components/screens/home/HomeScreen';

enum Paths {
  HOME = '/',
  ARTICLES = '/articles',
  ARTICLE = '/articles/:slug',
}

const Routes = () =>
  useRoutes([
    // Redirect 404s to the homepage (TODO: add a 404-page later)
    { path: '*', element: <HomeScreen /> },
    { path: Paths.HOME, element: <Navigate to='/articles' replace /> },
    { path: Paths.ARTICLES, element: <HomeScreen /> },
    { path: Paths.ARTICLE, element: <ArticleScreen /> },
  ]);

export default Routes;
