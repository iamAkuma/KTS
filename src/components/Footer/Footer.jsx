import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center py-5 mt-5">
            <h1 className="display-6 fw-bold">Contact Us</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p className="fs-5">
                            <i className="fas fa-phone-alt me-3"></i> +977 01 5912297
                        </p>
                        <p className="fs-5">
                            <i className="fas fa-envelope me-3"></i> info@ktsnepal.com
                        </p>
                        <p className="fs-5">
                            <i className="fas fa-map-marker-alt me-3"></i> Sukedhara, Kathmandu,
                            Nepal
                        </p>
                    </div>
                </div>
            </div>
            <nav className="d-flex justify-content-center mb-4">
                <Link className="nav-link mx-3" to="/">Home</Link>
                <Link className="nav-link mx-3" to="/alumni">Alumni</Link>
                <Link className="nav-link mx-3" to="/courses">Courses</Link>
                <Link className="nav-link mx-3" to="/blog">Blog</Link>
                <Link className="nav-link mx-3" to="/contact">Contact</Link>
            </nav>
            <div>
                <div className="col text-center">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <b>Kathmandu Technical School</b></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;