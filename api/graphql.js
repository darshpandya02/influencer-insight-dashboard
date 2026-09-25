// Vercel Function: serves the GraphQL API at /api/graphql.
// apps/api is compiled to apps/api/dist by the build command (see vercel.json).
const { createApp } = require('../apps/api/dist/server');

const appPromise = createApp('/api/graphql');

module.exports = async function handler(req, res) {
  const app = await appPromise;
  return app(req, res);
};
