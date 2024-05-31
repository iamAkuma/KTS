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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#Alumni" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Alumni
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#2079/80">2079/80</a>
                            <a className="dropdown-item" href="#2080">2080/81</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
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
