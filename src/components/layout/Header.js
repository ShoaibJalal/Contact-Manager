import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {title}
        </Link>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" /> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  title: "Manager App"
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
