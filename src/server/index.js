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
  # This "Book" type can be used in other type declarations.
  type GitGaard {
    name: String!
    userName: String!
    avatarUrl: String!
    status: [Status]
    followerCount: Int!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    viewer: [GitGaard]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    viewer(root, args, context) {
      return gitConnect().then(response => {
        console.log(response);
        const parsed = JSON.parse(response)
        console.log(Object.keys(parsed.data
          ));
      });
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
