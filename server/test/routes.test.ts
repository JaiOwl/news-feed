import request from 'supertest';
import app from '../src/app';
import packageJson from './../package.json';

describe('GET /',
  () => {
    it('should render properly',
      async () => {
        await request(app).get('/').expect(200);
      }
    );
  }
);
