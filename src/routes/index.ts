import express from 'express';
import resize from './middlewares/resize';
import image from './apis/image';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('api root!');
});

routes.use('/images', resize, image);

export default routes;
