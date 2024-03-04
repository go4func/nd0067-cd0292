import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const imagesDir = '../../../images';
  const filename: string = req.query.filename as string;
  let width: number = parseInt(req.query.width as string);
  let height: number = parseInt(req.query.height as string);

  // if there's no resolution params, serve the original file
  if (!width && !height) {
    res
      .status(200)
      .sendFile(path.join(__dirname, imagesDir, `${filename}.jpg`));
    return;
  }

  // if 1 dimension is missing, use the other
  if (!width) {
    width = height;
  }
  if (!height) {
    height = width;
  }

  res
    .status(200)
    .sendFile(
      path.join(__dirname, imagesDir, `${filename}_${width}_${height}.jpg`),
    );
});

export default router;
