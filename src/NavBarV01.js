// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { Link } from "react-router-dom";
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <a
        className="App-link"
        href="https://github.com/TurtleWolfe/fccTempLate"
        target="_blank"
        rel="noopener noreferrer"
        title="TempLate Scaffolding for Free Code Camp Projects, with FontAwesome, React-Router & Analytics"
      >
        <h1>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h1>
      </a>
      <Link to='/fccTempLate'>Home</Link>
      <Link to='/quote'>quote</Link>
      <Link to='/markdown'>markdown</Link>
      <Link to='/calculator'>calculator</Link>
      <Link to='/drum'>drum</Link>
      <Link to='/pomodoro'>pomodoro</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
};

NavBar.defaultProps = {
  title: 'fccTempLate',
  icon: 'fab fa-github',
  iconFCC: 'fab fa-free-code-camp'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconFCC: PropTypes.string.isRequired
};

export default NavBar;