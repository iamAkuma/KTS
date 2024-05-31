/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../img/KTS-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-poppins">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="KTS Logo" style={{ height: '52px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#Alumni" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Alumni
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/2079-80">2079/80</Link>
                            <Link className="dropdown-item" to="/2080-81">2080/81</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/courses">Courses</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://www.facebook.com/kathmandutechnicalschool" target="_blank"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="https://www.instagram.com/kts.nepal" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                <a href="https://www.linkedin.com/company/kathmandu-technical-school/" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="https://www.youtube.com/@kathmandutechnicalschool6948" target="_blank"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
        </nav>
    );
}

export default Navbar;
