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
    it('should throw err: missing filename', () => {
      const request = {
        query: {
          width: '600',
          height: '300',
        },
      };
      expect(function () {
        getImageQueryParams(request as unknown as Request);
      }).toThrow(new Error('missing filename'));
    });
    it('should throw err: invalid height', () => {
      const request = {
        query: {
          filename: 'fjord',
          width: '600',
          height: 'dsfsf',
        },
      };
      expect(function () {
        getImageQueryParams(request as unknown as Request);
      }).toThrow(new Error('invalid height'));
    });
    it('should throw err: invalid width', () => {
      const request = {
        query: {
          filename: 'fjord',
          width: 'sdfdf',
          height: '300',
        },
      };
      expect(function () {
        getImageQueryParams(request as unknown as Request);
      }).toThrow(new Error('invalid width'));
    });
  });
});
