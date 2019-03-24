import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Emoji from 'react-emoji-render';

const GET_USERNAME = gql`
  {
    viewer {
      login
      avatarUrl
      status {
        emoji
        message
      }
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
          <React.Fragment>
            <div>{data.viewer.login}</div>
            <div>{data.viewer.status.message}</div>
            <Emoji text={data.viewer.status.emoji} />
            <img src={data.viewer.avatarUrl} />
          </React.Fragment>
        );
      }}
    </Query>
  );
}

export default GraphQLDump;

