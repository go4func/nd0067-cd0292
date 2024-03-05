import type { NextFunction, Response, Request } from 'express';
import { resizeImg } from './../../utilities/sharp';
import fs from 'fs/promises';
import { getImagePath } from '../../utilities/file';
import { getImageQueryParams } from '../../utilities/request';

const resize = async (req: Request, res: Response, next: NextFunction) => {
  const queryParams = getImageQueryParams(req);

  if (!queryParams.filename) {
    res.status(400).send('missing filename');
    return;
  }

  // check if full image exists
  const fullImage = getImagePath(queryParams.filename, 0, 0);
  try {
    await fs.access(fullImage, fs.constants.F_OK);
  } catch (err) {
    res.status(404).send('not found');
    return;
  }

  // if there's no addition params of resolution, then continue to image endpoint
  if (!queryParams.width && !queryParams.height) {
    next();
    return;
  }

  // check if thumb file exists, if not then resize
  const thumbImage = getImagePath(
    queryParams.filename,
    queryParams.width,
    queryParams.height,
  );
  try {
    await fs.access(thumbImage, fs.constants.F_OK);
  } catch (err) {
    await resizeImg(
      fullImage,
      thumbImage,
      queryParams.width,
      queryParams.height,
    );
  }

  // next handler
  next();
};

export default resize;
