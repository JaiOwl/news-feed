import dotenv from 'dotenv';
import request from 'supertest';

dotenv.config();
import app from '../../src/App';

describe('GET /api/topnewsheadlines',
  () => {
    it('should return the news articles',
      async () => {
        await request(app)
          .post('/api/topnewsheadlines')
          .set('Accept', 'application/json')
          .expect(200)
          .then(
            (response) => {
              expect(response.body).not.toBeNull();
              expect(response.body).not.toBeUndefined();
              expect(response.body.length).toBeGreaterThan(0);
            }
          );
      }
    );
  }
);

