import { Request, Response, Router } from 'express';

const usersNameRoute = (router: Router) => {
  router.get('/users/:name', async (req: Request, res: Response) => {
    res.status(200).json({ message: '/api/users/:name route works', name: req.params.name });
    // TODO: actual endpoint handling
  });

  return router;
};

export default usersNameRoute;
