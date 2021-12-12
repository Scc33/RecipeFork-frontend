import { Request, Response, Router } from 'express';

const recipesNameRoute = (router: Router) => {
  router.get('/recipes/:name', async (req: Request, res: Response) => {
    res.status(200).json({ message: '/api/recipes/:name route works', name: req.params.name });
    // TODO: actual endpoint handling
  });

  return router;
};

export default recipesNameRoute;
