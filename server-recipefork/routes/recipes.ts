import { Request, Response, Router } from 'express';

const recipesRoute = (router: Router) => {
  router.get('/recipes', async (req: Request, res: Response) => {
    res.status(200).json({ message: '/api/recipes route works' });
    // TODO: actual endpoint handling
  });

  return router;
};

export default recipesRoute;
