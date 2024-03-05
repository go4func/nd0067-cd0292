import express from 'express';
import { getImagePath } from '../../utilities/file';
import { getImageQueryParams } from '../../utilities/request';

const router = express.Router();

router.get('/', (req, res) => {
  const queryParams = getImageQueryParams(req);

  res
    .status(200)
    .sendFile(
      getImagePath(queryParams.filename, queryParams.width, queryParams.height),
    );
});

export default router;
