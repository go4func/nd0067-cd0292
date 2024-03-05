import express from 'express';
import resize from './middlewares/resize';
import image from './apis/image';

import type { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('api root!');
});

routes.use('/images', resize, image);

export default routes;
