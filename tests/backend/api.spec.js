const request = require('supertest');
const app = require('../../src/app'); // assuming Express app is exported from src/app.js

describe('GET /api/status', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
  });
});
