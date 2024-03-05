import { app } from '../../main';
import supertest from 'supertest';

const request = supertest(app);
describe('Test Image routes', () => {
  describe(' route /images', () => {
    it('should response image with status 200', async () => {
      const response = await request.get('/api/images?filename=fjord');
      expect(response.status).toBe(200);
    });
    it('should resize and response image with status 200', async () => {
      const response = await request.get(
        '/api/images?filename=fjord&width=500&height=300',
      );
      expect(response.status).toBe(200);
    });
    it('should response with status 400: missing filename', async () => {
      const response = await request.get('/api/images?width=400');
      expect(response.status).toBe(400);
      expect(response.text).toEqual('missing filename');
    });
    it('should response with status 404: not found', async () => {
      const response = await request.get('/api/images?filename=notavailable');
      expect(response.status).toBe(404);
      expect(response.text).toEqual('not found');
    });
  });
});
