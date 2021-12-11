import express from 'express';

const registerRoutes = (server: express.Application) => {
  server.get('/api/', (req: express.Request, res: express.Response) => {
    res.json({ message: 'the route works!' });
  });
};

export default registerRoutes;
