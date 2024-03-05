import { originalImage, resizedImage } from '../../utilities/file';
import type { ImageQueryParams } from '../../utilities/request';

describe('Test file utilities', () => {
  describe('function originalImage return the path to original image file', () => {
    it('should contain the correct path', () => {
      expect(originalImage('fjord')).toContain('/images/fjord.jpg');
    });
  });

  describe('function resizedImage return the path to resized image file', () => {
    it('should contain the correct path', () => {
      const params: ImageQueryParams = {
        filename: 'fjord',
        width: 600,
        height: 300,
      };
      expect(resizedImage(params)).toContain(
        `/images/fjord_${params.width}_${params.height}.jpg`,
      );
    });
  });
});
