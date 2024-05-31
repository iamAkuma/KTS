import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../img/KTS-logo.png'; // Adjust the path as needed

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-poppins">
            <a className="navbar-brand" href="#home">
                <img src={logo} alt="Brand Logo" style={{ height: '40px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Alumni">Alumni</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
