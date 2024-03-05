import { getImagePath } from '../../utilities/file';
import { resizeImg } from '../../utilities/sharp';

describe('Test sharp utilities', () => {
  describe('function resizeImg resizes image to correspond size', () => {
    it('should not throw error', async () => {
      expect(async () => {
        await resizeImg(
          getImagePath('fjord', 0, 0),
          getImagePath('fjord', 600, 300),
          600,
          300,
        );
      }).not.toThrow();
    });
  });
});
