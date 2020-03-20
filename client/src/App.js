import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./global.style";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </Fragment>
  );
}

export default App;
