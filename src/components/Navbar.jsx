import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">
            Newzy
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-warning "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/health">
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/science">
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/sports">
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-warning " to="/technology">
                  Technology
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
