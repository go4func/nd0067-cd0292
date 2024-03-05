import type { NextFunction, Response, Request } from 'express';
import { resizeImg } from './../../utilities/sharp';
import fs from 'fs/promises';
import { getImagePath } from '../../utilities/file';
import { getImageQueryParams } from '../../utilities/request';
import type { ImageQueryParams } from '../../utilities/request';

const resize = async (req: Request, res: Response, next: NextFunction) => {
  // parse and validate request params
  let queryParams = {} as ImageQueryParams;
  try {
    queryParams = getImageQueryParams(req);
  } catch (err) {
    res.status(400).send((err as Error).message);
    return;
  }

  // check if full image exists
  const fullImage = getImagePath(queryParams.filename, 0, 0);
  try {
    await fs.access(fullImage, fs.constants.F_OK);
  } catch (err) {
    res.status(404).send('invalid filename');
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
    console.log(`generate new image ${thumbImage}`);
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
