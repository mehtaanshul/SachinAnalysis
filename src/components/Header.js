import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md Header">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/overall">Overall</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;