import path from 'path';

const imageDir = path.join(__dirname, '../../images');
const imageExt = 'jpg';

const getImagePath = (
  filename: string,
  width: number,
  height: number,
): string => {
  if (!width && !height) {
    return path.join(imageDir, `${filename}.${imageExt}`);
  }
  return path.join(imageDir, `${filename}_${width}_${height}.${imageExt}`);
};

export { getImagePath };
