import type { Request } from 'express';

export interface ImageQueryParams {
  filename: string;
  width: number;
  height: number;
}

// get query params from request
const getImageQueryParams = (req: Request): ImageQueryParams => {
  const filename = req.query.filename ? (req.query.filename as string) : '';
  const width = req.query.width ? parseInt(req.query.width as string) : 0;
  const height = req.query.height ? parseInt(req.query.height as string) : 0;

  const params = { filename, width, height } as ImageQueryParams;
  if (!params.width && !params.height) {
    return params;
  }
  if (!params.width) {
    params.width = params.height;
  }
  if (!params.height) {
    params.height = params.width;
  }

  return params;
};

export { getImageQueryParams };
