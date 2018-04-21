import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      {/* <div style={{"paddingBottom":"60px"}}> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/logout" component={Logout} /> */}
        <Route component={NoMatch} />
      </Switch>
      {/* </div > */}
      <Footer/>
    </div>
  </Router>
);

export default App;
