import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaBars, FaFilePdf } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="profile">
        <img src={`${process.env.PUBLIC_URL}/MicrosoftTeams-image (3).png`} alt="Profile" />
      </div>
      <div className="name">Himanshu Chauhan</div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="links">
        <Link to="/"><FaHome /><span>Home</span></Link>
        <Link to="/about"><FaUser /><span>About</span></Link>
        <Link to="/contact"><FaEnvelope /><span>Contact</span></Link>
        <Link to="/portfolio"><FaBriefcase /><span>Portfolio</span></Link>
        <Link to="/projects"><FaBars /><span>Projects</span></Link>
        <Link to="/resume"><FaFilePdf /><span>Resume</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
