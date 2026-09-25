import { createApp } from './server';

async function startServer() {
  const app = await createApp('/graphql');
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
}
startServer();
