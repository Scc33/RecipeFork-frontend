import { Request, Response, Router } from 'express';

const usersRoute = (router: Router) => {
  router.get('/users', async (req: Request, res: Response) => {
    res.status(200).json({ message: '/api/users route works' });
    // TODO: actual endpoint handling
  });

  return router;
};

export default usersRoute;
