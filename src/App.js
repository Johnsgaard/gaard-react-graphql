import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

// Components
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import MissingPage from "./components/MissingPage";
import DatesToRemember from "./components/DatesToRemember";
import PrivacyPolicy from "./components/PrivacyPolicy";

// Styles
import "./template-css/bootstrap.min.css";
import "./template-css/animate.min.css";
import "./template-css/App.scss";

// Global.Apollo
const client = new ApolloClient({
  uri: "https://gaard.ca/gaardql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Josh" exact component={Page} />
            <Route path="/dates" exact component={DatesToRemember} />
            <Route path="/mmaempire" exact component={PrivacyPolicy} />
            <Route component={MissingPage} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
};
export default App;
