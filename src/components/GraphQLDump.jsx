import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_USERNAME = gql`
  {
    viewer {
      login
    }
  }
`;

const GraphQLDump = () => {
  return (
    <Query query={GET_USERNAME}>
       {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div>{data.viewer.login}</div>
        );
      }}
    </Query>
  );
}

export default GraphQLDump;

