import { Application, Router } from 'express';

import recipesRoute from './recipes';
import recipesNameRoute from './recipes-name';
import usersRoute from './users';
import usersNameRoute from './users-name';

const registerRoutes = (server: Application, router: Router) => {
  server.use('/api', recipesRoute(router));
  server.use('/api', recipesNameRoute(router));
  server.use('/api', usersRoute(router));
  server.use('/api', usersNameRoute(router));
};

export default registerRoutes;
