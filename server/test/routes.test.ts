import dotenv from 'dotenv';
import request from 'supertest';

dotenv.config();
import app from '../src/App';

describe('GET /',
  () => {
    it('should render properly',
      async () => {
        await request(app).get('/').expect(200);
      }
    );
  }
);
