import { gql } from '@apollo/client';

export const GET_INFLUENCERS = gql`
  query GetInfluencers {
    influencers {
      id
      name
      category
      followers
    }
  }
`

export const GET_INSIGHTS = gql`
  query GetInsights {
    insight {
    query
    }
  }
`;

// export const GET_INFLUENCER_ENGAGEMENT = gql`
//   query GetInfluencerEngagement {
//   influencers {
//     id
//     name
//     averageLikes
//     averageComments
//     engagementRate
//   }
// }
// `;
// export const GET_AUDIENCE_DEMOGRAPHICS = gql`
//  query GetAudienceDemographics {
//   influencers {
//     id
//     name
//     audience {
//       ageGroups
//       genderDistribution
//       locations
//     }
//   }
// }
// `;
// export const GET_TOP_INFLUENCERS = gql`
//   query GetTopInfluencers {
//   topInfluencers(limit: 10, sortBy: "engagementRate") {
//     id
//     name
//     category
//     engagementRate
//     followers
//   }
// }
// `;
// export const GET_INFLUENCER_CAMPAIGNS = gql`
//   query GetInfluencerCampaigns($influencerId: ID!) {
//   influencer(id: $influencerId) {
//     id
//     name
//     campaigns {
//       id
//       brand
//       performanceScore
//       impressions
//       clicks
//       conversions
//     }
//   }
// }
// `;
// export const GET_FOLLOWER_GROWTH = gql`
//   query GetFollowerGrowth($influencerId: ID!) {
//   influencer(id: $influencerId) {
//     id
//     name
//     followerGrowth {
//       date
//       followers
//     }
//   }
// }
// `;

// export const GET_CONTENT_INSIGHTS = gql`
//   query GetContentInsights($influencerId: ID!) {
//   influencer(id: $influencerId) {
//     id
//     name
//     posts {
//       id
//       mediaType
//       caption
//       likes
//       comments
//       engagementScore
//       postedAt
//     }
//   }
// `;

// export const GET_SIMILAR_INFLUENCERS = gql`
//   query GetSimilarInfluencers($influencerId: ID!) {
//   similarInfluencers(influencerId: $influencerId) {
//     id
//     name
//     category
//     engagementRate
//     followers
//   }
// }
// `;

