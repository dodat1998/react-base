
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

import Menu from "./components/Menu/Menu";
export default class App extends React.Component {
  showRouter = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((router, index) => {
        return (
          <Route
            key={index}
            exact={router.exact}
            path={router.path}
            component={router.main}
          />
        );
      });
    }
    return result;
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Menu />
            <Switch>{this.showRouter(routes)}</Switch>
          </div>
        </Router>
      </div>
    );
  }
}