import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Influencer {
    id: ID!
    name: String!
    category: String!
    followers: Int!
  }

  type Query {
    influencers: [Influencer]
    insight(query: String!): String
  }
`;

export default typeDefs;