import { getImageQueryParams } from '../../utilities/request';
import type { ImageQueryParams } from '../../utilities/request';
import type { Request } from 'express';

describe('Test request utilities', () => {
  describe('function getImageQueryParams parses query param', () => {
    it('should return correct ImageQueryParams', () => {
      const request = {
        query: {
          filename: 'fjord',
          width: '600',
          height: '300',
        },
      };
      const params: ImageQueryParams = {
        filename: 'fjord',
        width: 600,
        height: 300,
      };
      expect(getImageQueryParams(request as unknown as Request)).toEqual(
        params,
      );
    });
  });
});
