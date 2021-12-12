import bodyParser from 'body-parser';
import express, {
  Application, NextFunction, Request, Response, Router,
} from 'express';
import { connect } from 'mongoose';

import config from './config';
import registerRoutes from './routes/index';

const server: Application = express();

// Use environment defined port or local defined port
// TODO: potentially set up .env file
const port: number = Number(process.env.PORT) || config.localport;

// Connect to DB via mongoose
setTimeout(
  () => connect(config.mongo_connection, () => console.log('connected to cluster')), /* eslint-disable-line no-console */
  30000,
);

// Allow CORS so that backend and frontend could be put on different servers
const allowCrossDomain = (
  req: Request,
  res: Response,
  next: NextFunction,
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

// Register routes with the server
const router: Router = express.Router();
registerRoutes(server, router);

// Start the server
server.listen(port, () => console.log(`Server running on port ${port}`)); /* eslint-disable-line no-console */
