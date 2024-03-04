import sharp from 'sharp';

const resizeImg = async (
  src: string,
  dest: string,
  width: number,
  height: number,
): Promise<void> => {
  const image = sharp(src).resize(width, height);
  await image.toFile(dest);
};

export { resizeImg };
