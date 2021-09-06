import React from 'react';
import './Navbar.css'


class Navbar extends React.Component {
    render() {
      return (
          <div id="nav-div">
              <div id="nav-left">
                  <a id="nav-home" className="nav-link" href="/">Home</a>
                  <a className="nav-link" href="/">Women</a>
                  <a className="nav-link" href="/">Men</a>
              </div>
              <div id="nav-right">
                  <a className="nav-link" href="/">Shopping Basket</a>
                  <a className="nav-link" href="/">Login</a>
              </div>
          </div>
      )
    }
  }

  export default Navbar;