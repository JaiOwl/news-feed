import request from 'supertest';
import app from '../../src/app';
import packageJson from '../../package.json';

describe('GET /api/version',
  () => {
    it('should return the service name and version',
      async () => {
        await request(app)
          .get('/api/version')
          .set('Accept', 'application/json')
          .expect(200)
          .then(
            (response) => {
              expect(response.body).not.toBeNull();
              expect(response.body).not.toBeUndefined();
              expect(response.body.service).toEqual(`${packageJson.name}`);
              expect(response.body.version).toEqual(`${packageJson.version}`);
            }
          );
      }
    );
  }
);

