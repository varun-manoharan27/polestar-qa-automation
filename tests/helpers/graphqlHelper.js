const request = require('supertest');

const executeGraphQLQuery = async (app, query, variables) => {
  return await request(app)
    .post('/graphql')
    .send({ query, variables });
};

module.exports = { executeGraphQLQuery };
