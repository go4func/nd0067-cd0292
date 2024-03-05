import express from 'express';
import { originalImage, resizedImage } from '../../utilities/file';
import {
  getImageQueryParams,
  standardizeQueryParams,
} from '../../utilities/request';

const router = express.Router();

router.get('/', (req, res) => {
  const queryParams = getImageQueryParams(req);

  // if there's no resolution params, serve the original file
  if (!queryParams.width && !queryParams.height) {
    res.status(200).sendFile(originalImage(queryParams.filename));
    return;
  }

  // serve the resized file
  standardizeQueryParams(queryParams);
  res.status(200).sendFile(resizedImage(queryParams));
});

export default router;
