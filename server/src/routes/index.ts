import express, { Request, Response } from 'express';
import user from './user';
import auth from './auth';
import calculator from './calculator';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to ZiGG application' });
});

user(routes);
auth(routes);
calculator(routes);

export default routes;
