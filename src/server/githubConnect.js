const { ApolloClient, gql } = require("apollo-boost");
const { createHttpLink } = require("apollo-link-http");
const { InMemoryCache } = require("apollo-cache-inmemory");
const fetch = require("node-fetch");
const token = require("../config");

const VIEWER = gql`
  {
    viewer {
      name
      login
      avatarUrl
      status {
        emoji
        message
      }
      followers {
        totalCount
      }
      contributionsCollection {
        totalIssueContributions
        totalCommitContributions
        totalRepositoryContributions
        totalPullRequestReviewContributions
        totalPullRequestContributions
        restrictedContributionsCount
      }
    }
  }
`;

const opts = {
  credentials: "same-origin",
  headers: {
    authorization: `bearer ${token}`,
  },
};

function gitConnect() {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: "https://api.github.com/graphql",
      fetch: fetch,
      ...opts,
    }),
    cache: new InMemoryCache(),
  });
  return client.query({ query: VIEWER });
}

module.exports = gitConnect;
