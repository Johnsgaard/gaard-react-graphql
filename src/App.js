import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';


// Components
import SidePanel from './components/SidePanel';
import MenuButton from './components/MenuButton';
import Page from './components/Page';
import MissingPage from './components/MissingPage';

// Styles 
import './template-css/bootstrap.min.css';
import './template-css/animate.min.css';
import './template-css/App.scss';



// Global.Apollo
const client = new ApolloClient({
  uri: 'https://gaard.ca/graphql',
  cache: new InMemoryCache(),
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
      <Router>
        <ApolloProvider client={client}>
        <div className="App">
          <MenuButton toggleSidePanel={this.toggleSidePanel} />
          <SidePanel spOpen={this.state.spOpen} toggleSidePanel={this.toggleSidePanel} />
          <Switch>
            <Route path="/" exact component={Page} />
            <Route component={MissingPage} />
          </Switch>
        </div>
      </ApolloProvider>
      </Router>
    );
  }
}

export default App;
