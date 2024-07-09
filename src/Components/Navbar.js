
import React, { Component } from "react";
import {Link} from 'react-router-dom';
export class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className='navbar fixed-top navbar-expand-lg bg-dark'>
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/nwsnacks">
              NewSnacks
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ backgroundColor: "#4a4040" }}></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" style={{ color: "rgb(138 138 138)"}} aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" style={{ color: "rgb(138 138 138)"}} to="/about"> About</Link>
                </li>
                <li>
                  <Link className="nav-link active " style={{ color: "rgb(138 138 138)"}} to="/business"> business</Link>
                </li>
                <li>
                  <Link className="nav-link active" style={{ color: "rgb(138 138 138)"}} to="/entertainment"> entertainment</Link>
                </li>
                <li>
                  <Link className="nav-link active" style={{ color: "rgb(138 138 138)"}} to="/general"> general</Link>
                </li>
                <li>
                  <Link className="nav-link active" style={{ color: "rgb(138 138 138)"}} to="/health"> health</Link>
                </li>
                <li>
                  <Link className="nav-link active " style={{ color: "rgb(138 138 138)"}} to="/science"> science</Link>
                </li>
                <li>
                  <Link className="nav-link active " style={{ color: "rgb(138 138 138)"}} to="/about"> sports</Link>
                </li>
                <li>
                  <Link className="nav-link active " style={{ color: "rgb(138 138 138)"}} to="/technology"> technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
