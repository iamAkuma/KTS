import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../img/KTS-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-poppins">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Brand Logo" style={{ height: '50px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/alumni">Alumni</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
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
                <a href="https://facebook.com"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="https://instagram.com"><i className="fab fa-instagram fa-lg"></i></a>
                <a href="https://linkedin.com"><i className="fab fa-linkedin fa-lg"></i></a>
                <a href="https://youtube.com"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
        </nav>
    );
}

export default Navbar;
