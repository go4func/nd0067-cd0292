import type { Request } from 'express';

export interface ImageQueryParams {
  filename: string;
  width: number;
  height: number;
}

// get query params from request
const getImageQueryParams = (req: Request): ImageQueryParams => {
  const filename: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  return { filename, width, height };
};

// if 1 dimension is missing, use the other
const standardizeQueryParams = (params: ImageQueryParams): ImageQueryParams => {
  if (!params.width) {
    params.width = params.height;
  }
  if (!params.height) {
    params.height = params.width;
  }

  return params;
};

export { getImageQueryParams, standardizeQueryParams };
