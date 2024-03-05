import express from 'express';
import { originalImage, resizedImage } from '../../utilities/file';

const router = express.Router();

router.get('/', (req, res) => {
  const filename: string = req.query.filename as string;
  let width: number = parseInt(req.query.width as string);
  let height: number = parseInt(req.query.height as string);

  // if there's no resolution params, serve the original file
  if (!width && !height) {
    res.status(200).sendFile(originalImage(filename));
    return;
  }

  // if 1 dimension is missing, use the other
  if (!width) {
    width = height;
  }
  if (!height) {
    height = width;
  }

  // serve the resized file
  res.status(200).sendFile(resizedImage(filename, width, height));
});

export default router;
