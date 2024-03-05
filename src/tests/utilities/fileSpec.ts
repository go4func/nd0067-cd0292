import path from 'path';
import { getImagePath } from '../../utilities/file';

describe('Test file utilities', () => {
  describe('function getImagePath return the path to image file', () => {
    it('should return the file with no resized resolution', () => {
      expect(getImagePath('fjord', 0, 0)).toContain(
        path.join('images', 'full', 'fjord.jpg'),
      );
    });
    it('should return the file with resized sizes provided', () => {
      expect(getImagePath('fjord', 1000, 500)).toContain(
        path.join('images', 'thumb', 'fjord_1000_500.jpg'),
      );
    });
    it('should return the file with resized width provided', () => {
      expect(getImagePath('fjord', 1000, 0)).toContain(
        path.join('images', 'thumb', 'fjord_1000_1000.jpg'),
      );
    });
    it('should return the file with resized height provided', () => {
      expect(getImagePath('fjord', 0, 500)).toContain(
        path.join('images', 'thumb', 'fjord_500_500.jpg'),
      );
    });
  });
});
