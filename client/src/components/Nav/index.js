import React from "react";
import "./style.css";
// import MyBooks from "../../pages/MyBooks";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Nav() {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        React Books
      </a>
      <a className="navbar-brand" href="/mybooks">
        My Books
      </a>
      {/* <Provider>
        <Router>
          <Route exact path="/" component={} />
          <Route exact path="/mybooks" component={MyBooks} />
        </Router>
      </Provider> */}
    </nav>
  );
}

export default Nav;
