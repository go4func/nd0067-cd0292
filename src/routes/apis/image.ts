import express from 'express';
import { getImagePath } from '../../utilities/file';
import { getImageQueryParams } from '../../utilities/request';
import type { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const queryParams = getImageQueryParams(req);

  res
    .status(200)
    .sendFile(
      getImagePath(queryParams.filename, queryParams.width, queryParams.height),
    );
});

export default router;
