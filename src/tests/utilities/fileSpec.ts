import { getImagePath } from '../../utilities/file';

describe('Test file utilities', () => {
  describe('function getImagePath return the path to image file', () => {
    it('should return the file with no resized resolution', () => {
      expect(getImagePath('fjord', 0, 0)).toContain('/images/fjord.jpg');
    });
    it('should return the file with resized sizes provided', () => {
      expect(getImagePath('fjord', 1000, 500)).toContain(
        '/images/fjord_1000_500.jpg',
      );
    });
  });
});
