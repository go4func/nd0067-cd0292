import path from 'path';

const fullImageDir = path.join(__dirname, '../../images/full');
const thumbImageDir = path.join(__dirname, '../../images/thumb');
const imageExt = 'jpg';

const getImagePath = (
  filename: string,
  width: number,
  height: number,
): string => {
  if (!width && !height) {
    return path.join(fullImageDir, `${filename}.${imageExt}`);
  }

  if (!width) {
    return path.join(
      thumbImageDir,
      `${filename}_${height}_${height}.${imageExt}`,
    );
  }

  if (!height) {
    return path.join(
      thumbImageDir,
      `${filename}_${width}_${width}.${imageExt}`,
    );
  }

  return path.join(thumbImageDir, `${filename}_${width}_${height}.${imageExt}`);
};

export { getImagePath };
