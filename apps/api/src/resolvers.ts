import influencers from './data/mockData';
import { queryRAGEngine } from './ragEngine';

const resolvers = {
  Query: {
    influencers: () => influencers,
    insight: async (_: any, { query }: { query: string }) => {
      return await queryRAGEngine(query);
    },
  },
};

export default resolvers;