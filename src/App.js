import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Apollo
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

// Components
import SidePanel from "./components/SidePanel";
import MenuButton from "./components/MenuButton";
import Page from "./components/Page";
import MissingPage from "./components/MissingPage";
import DatesToRemember from "./components/DatesToRemember";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SurfReport from "./components/SurfReport";

// Global.Apollo
const client = new ApolloClient({
  uri: "https://gaard.ca/gaardql",
  cache: new InMemoryCache(),
});

const App = () => {
  const [spOpen, setSpOpen] = useState(false);
  const toggleSidePanel = () => {
    setSpOpen(!spOpen);
  };

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <MenuButton toggleSidePanel={toggleSidePanel} />
          <SidePanel spOpen={spOpen} toggleSidePanel={toggleSidePanel} />
          <Switch>
            <Route path="/" exact component={Page} />
            <Route path="/dates" exact component={DatesToRemember} />
            <Route path="/mmaempire" exact component={PrivacyPolicy} />
            <Route path="/surf" exact component={SurfReport} />
            <Route component={MissingPage} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
};
export default App;
