import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditorView from "./views/EditorView";
import HomeView from "./views/HomeView";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/edit">
            <EditorView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
