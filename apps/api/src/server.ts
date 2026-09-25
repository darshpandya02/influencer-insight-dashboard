import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Builds the Express app with Apollo mounted at `path`.
// Used by the local dev server (index.ts) and the Vercel function (api/graphql.ts).
export async function createApp(path = '/graphql'): Promise<Application> {
  const app: Application = express();
  const server = new ApolloServer({ typeDefs, resolvers, introspection: true });
  await server.start();
  server.applyMiddleware({ app, path });
  return app;
}
