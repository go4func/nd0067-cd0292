import path from 'path';
import type { ImageQueryParams } from './request';

const imageDir = path.join(__dirname, '../../images');
const imageExt = 'jpg';

const originalImage = (imageName: string): string => {
  return path.join(imageDir, `${imageName}.${imageExt}`);
};

const resizedImage = (params: ImageQueryParams): string => {
  return path.join(
    imageDir,
    `${params.filename}_${params.width}_${params.height}.${imageExt}`,
  );
};

export { originalImage, resizedImage };
