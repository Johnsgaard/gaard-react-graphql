import React, { Component } from 'react';

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

// Auth
import { token } from './config'

// Components
import SidePanel from './components/SidePanel';
import MenuButton from './components/MenuButton';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import ParallaxBreak from './components/ParallaxBreak';
import Services from './components/Services';
import Contact from './components/Contact';
import ContactParallax from './components/ContactParallax';
import Footer from './components/Footer';

// Styles 
import './template-css/bootstrap.min.css';
import './template-css/animate.min.css';
import './template-css/App.scss';



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
      loading: true,
    };
  }

  componentWillMount() {
    this.setState({ loading: false });
  }

  toggleSidePanel = () => {
    this.setState({ spOpen: !this.state.spOpen });
  }

  render() {
    if (this.state.loading) {
      return (<div className="page-loader">
          <div className="loader">Loading...</div>
      </div>);
    }
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <MenuButton toggleSidePanel={this.toggleSidePanel} />
          <SidePanel spOpen={this.state.spOpen} toggleSidePanel={this.toggleSidePanel} />
          <div className="appear-animate">
            <div className="page" id="top">
              <AboutMe />
              <ParallaxBreak type="wheat" size="400px" height="8px" />
              <Resume />
              <ParallaxBreak type="universe" size="500px" height="8px" />
              <Services />
              <ParallaxBreak type="universe" size="400px" height="8px" />
              <Contact />
              <ContactParallax />
              <Footer />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
