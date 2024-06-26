import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../img/KTS-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-poppins">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="KTS Logo" />
            </Link>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={toggleNavbar}>Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/alumni" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Alumni
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/2079-80" onClick={toggleNavbar}>2079/80</Link>
                            <Link className="dropdown-item" to="/2080-81" onClick={toggleNavbar}>2080/81</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/courses" onClick={toggleNavbar}>Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog" onClick={toggleNavbar}>Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" onClick={toggleNavbar}>Contact</Link>
                    </li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.facebook.com/kathmandutechnicalschool" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg"></i></a>
                    <a href="https://www.instagram.com/kts.nepal" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a>
                    <a href="https://www.linkedin.com/company/kathmandu-technical-school/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                    <a href="https://www.youtube.com/@kathmandutechnicalschool6948" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-lg"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;