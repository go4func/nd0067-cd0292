import type { NextFunction, Response, Request } from 'express';
import { resizeImg } from './../../utilities/sharp';
import fs from 'fs/promises';
import { originalImage, resizedImage } from '../../utilities/file';

const resize = async (req: Request, res: Response, next: NextFunction) => {
  const filename: string = req.query.filename as string;
  let width: number = parseInt(req.query.width as string);
  let height: number = parseInt(req.query.height as string);

  if (!filename) {
    res.status(400).send('missing filename');
    return;
  }

  // check if original file exists
  const original = originalImage(filename);
  try {
    await fs.access(original, fs.constants.F_OK);
  } catch (err) {
    res.status(404).send('not found');
    return;
  }

  // if there's no resolution params, then continue to image endpoint
  if (!width && !height) {
    next();
    return;
  }

  // if 1 dimension is missing, use the other
  if (!width) {
    width = height;
  }
  if (!height) {
    height = width;
  }

  // check if resize file exists, if not then resize
  const resized = resizedImage(filename, width, height);
  try {
    await fs.access(resized, fs.constants.F_OK);
  } catch (err) {
    await resizeImg(original, resized, width, height);
  }

  next();
};

export default resize;
