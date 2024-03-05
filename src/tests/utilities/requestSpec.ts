import {
  getImageQueryParams,
  standardizeQueryParams,
} from '../../utilities/request';

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

  describe('function standardizeQueryParams standardizes request params', () => {
    it('should return if both width and height are null', () => {
      const params = {
        filename: 'fjord',
      };
      expect(standardizeQueryParams(params as ImageQueryParams)).toEqual({
        filename: 'fjord',
      } as ImageQueryParams);
    });
    it('should use height when width is empty', () => {
      const params = {
        filename: 'fjord',
        height: 300,
      };
      expect(standardizeQueryParams(params as ImageQueryParams)).toEqual({
        filename: 'fjord',
        width: 300,
        height: 300,
      });
    });
    it('should use width when height is empty', () => {
      const params = {
        filename: 'fjord',
        width: 500,
      };
      expect(standardizeQueryParams(params as ImageQueryParams)).toEqual({
        filename: 'fjord',
        width: 500,
        height: 500,
      });
    });
  });
});
