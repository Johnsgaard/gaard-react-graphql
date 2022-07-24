import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Loader from "./components/Loader";

//icon styles
import "./template-css/et-line.css";

// Evolution styles
import "./template-evolution/css/bootstrap.min.css";
import "./template-evolution/css/all.min.css";
import "./template-evolution/css/animate.min.css";
import "./template-evolution/css/style.css";

// custom css
import "./css/custom.scss";

import "./template-css/font-awesome.min.css";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
