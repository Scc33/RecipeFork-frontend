import bodyParser from 'body-parser';
import express from 'express';
// import mongoose, secrets

import registerRoutes from './routes/index';

const server: express.Application = express();

// Use environment defined port or 4000
// TODO: potentially set up .env file
const port: number = Number(process.env.PORT) || 4000;

// TODO: use mongoose to connect to DB
// mongoose.connect(secrets.mongo_connection,  { useNewUrlParser: true });

// Allow CORS so that backend and frontend could be put on different servers
const allowCrossDomain = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
};
server.use(allowCrossDomain);

// Use the body-parser package in our application
server.use(bodyParser.urlencoded({
  extended: true,
}));
server.use(bodyParser.json());

// Use routes as a module (see index.js)
registerRoutes(server);

// Start the server
server.listen(port, () => console.log(`Server running on port ${port}`)); /* eslint-disable-line no-console */
