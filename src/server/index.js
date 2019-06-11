const { ApolloServer, gql } = require('apollo-server');
const gitConnect = require('./githubConnect');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # The GitHub status
  type Status {
    emoji: String!
    message: String!
  }

  # Follower
  type Followers {
    totalCount: Int!
  }

  # Viewer
  type GitGaard {
    name: String!
    login: String!
    avatarUrl: String!
    status: Status
    followers: Followers
    contributionsCollection: Contributions
  }

  type Contributions {
    totalIssueContributions: Int!
    totalCommitContributions: Int!
    totalRepositoryContributions: Int!
    totalPullRequestReviewContributions: Int!
    totalPullRequestContributions: Int!
    restrictedContributionsCount: Int!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    viewer: GitGaard
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
let cache = {
  data: null,
  time: null,
};

const resolvers = {
  Query: {
    viewer(root, args, context, info) {
      let fetchPromise = Promise.resolve();
      console.log(Date.now() - (60 * 60 * 1000), cache.time);
      if (!cache.data || !cache.time || cache.time < Date.now() - (5 * 1000)) {
        // fetch apollo and add it to the cache
        fetchPromise = gitConnect().then(({ data, error, loading }) => {
          cache = {
            time: Date.now(),
            data,
          }
        });
      }
      return fetchPromise.then(() => cache.data.viewer);
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
