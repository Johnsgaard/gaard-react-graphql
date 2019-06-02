const rp = require('request-promise');
const token = require('../config');

function gitConnect() { 
  return rp({
    uri: `https://api.github.com/graphql`,
    headers: {
      'User-Agent': 'client'
    },
    auth: {
      'bearer': token
    }
  });
}

module.exports = gitConnect;
