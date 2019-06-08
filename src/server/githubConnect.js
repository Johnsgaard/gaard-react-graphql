const ApolloClient = require('apollo-boost');
const { InMemoryCache } = require('apollo-cache-inmemory');
const token = require('../config');

 function gitConnect() {
    const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      'User-Agent': 'client'
    },
    auth: {
      'bearer': token
    }
  });
  return client;
 }

 module.exports = gitConnect;
