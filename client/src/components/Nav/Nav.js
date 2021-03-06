import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <img src="../../images/tiller.jpg" width="60" height="60" style={{"borderRadius":"50%"}} alt=""/>
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> 
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Usha Kiran Agencies
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/auth/google">Sign In with Google</a></li>
        {/* <li><a href="/auth/logout">Logout</a></li>
        <li><a href="/auth/login">Login</a></li> */}
      </ul>
    </div>
  </nav>
);

export default Nav;
