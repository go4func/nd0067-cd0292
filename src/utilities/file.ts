import path from 'path';

const imageDir = path.join(__dirname, '../../images');

const originalImage = (imageName: string): string => {
  return path.join(imageDir, `${imageName}.jpg`);
};

const resizedImage = (
  imageName: string,
  width: number,
  height: number,
): string => {
  return path.join(imageDir, `${imageName}_${width}_${height}.jpg`);
};

export { originalImage, resizedImage };
