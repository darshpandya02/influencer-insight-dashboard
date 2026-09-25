# Influencer Insight Dashboard

Turborepo monorepo (Yarn workspaces):

- `apps/api` - GraphQL API (Apollo Server + Express)
- `apps/dashboard` - React (CRA) + MUI dashboard that queries the API with Apollo Client
- `packages/gql` - shared GraphQL query documents

## Live demo

Deployed on Vercel. The dashboard is served statically and the GraphQL API runs as a
Vercel Function at `/api/graphql` (`api/graphql.ts` wraps `apps/api/src/server.ts`).

**Sample data:** the demo does not connect to any Instagram/YouTube API. Influencer rows come
from seeded mock data in `apps/api/src/data/mockData.ts`, and the `insight` query returns a
placeholder response (`apps/api/src/ragEngine.ts`).

## Local development

```bash
yarn install
yarn workspace gql build
yarn workspace api dev        # http://localhost:4000/graphql
yarn workspace dashboard dev  # http://localhost:3000
```
