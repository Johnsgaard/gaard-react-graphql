import React, { Component } from 'react';

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

// Auth
import { token } from './config'

// Components
import GraphQLDump from './components/GraphQLDump';
import SidePanel from './components/SidePanel';
import './template-css/App.scss';
import MenuButton from './components/MenuButton';


// Global.Apollo
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  cache: new InMemoryCache()
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spOpen: false,
    };
  }

  toggleSidePanel = () => {
    this.setState({ spOpen: !this.state.spOpen });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <MenuButton toggleSidePanel={this.toggleSidePanel} />
          <SidePanel spOpen={this.state.spOpen} toggleSidePanel={this.toggleSidePanel} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
