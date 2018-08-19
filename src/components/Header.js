import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top Header">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => this.props.scrollto("home")}>HOME</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => this.props.scrollto("overall")}>OVERALL  ANAYLYSIS</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={() => this.props.scrollto("odi")}>ODI</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;