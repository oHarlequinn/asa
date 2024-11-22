// Header.jsx
// import React from 'react';
import './css/Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header>

      {/* <h1>oHarlequinn's Notebook</h1> */}
      <h1>Lorem Ipsum</h1>

      <nav>
        {/* <a href="home.html" className="nav-btn">Home</a>
        <a href="about.html" className="nav-btn">About Me</a>
        <a href="tools.html" className="nav-btn">Resource</a>
        <a href="social.html" className="nav-btn">Social</a> */}
        {/* <NavLink to="/" className="nav-btn">Home</NavLink>
        <NavLink to="/about" className="nav-btn">About Me</NavLink>
        <NavLink to="/resource" className="nav-btn">Resource</NavLink>
        <NavLink to="/social" className="nav-btn">Social</NavLink> */}
        <NavLink to="/" className="nav-btn">Dolor</NavLink>
        <NavLink to="/about" className="nav-btn">Sit</NavLink>
        <NavLink to="/resource" className="nav-btn">Amet</NavLink>
        <NavLink to="/social" className="nav-btn">Consectetur</NavLink>
      </nav>

    </header>
  );
}

export default Header;