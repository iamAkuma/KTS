/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
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
                            <i className="fas fa-envelope me-3"></i>
                            <a href="mailto:info@ktsnepal.com" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                                info@ktsnepal.com
                            </a>
                        </p>
                        <p className="fs-5">
                            <i className="fas fa-map-marker-alt me-3"></i>
                            <a
                                href="https://maps.app.goo.gl/rM3pUwdj9aKmL9cm9"
                                target="_blank"
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                Sukedhara, Kathmandu, Nepal
                            </a>
                        </p>


                    </div>
                </div>
            </div>
            <nav className="d-flex justify-content-center mb-4">
                <Link className="nav-link mx-3" to="/" style={{ color: '#2b3991', fontWeight: 'bold' }}>Home</Link>
                <Link className="nav-link mx-3" to="/alumni" style={{ color: '#2b3991', fontWeight: 'bold' }}>Alumni</Link>
                <Link className="nav-link mx-3" to="/courses" style={{ color: '#2b3991', fontWeight: 'bold' }}>Courses</Link>
                <Link className="nav-link mx-3" to="/blog" style={{ color: '#2b3991', fontWeight: 'bold' }}>Blog</Link>
                <Link className="nav-link mx-3" to="/contact" style={{ color: '#2b3991', fontWeight: 'bold' }}>Contact</Link>
            </nav>

            <div>
                <div class="col text-center">
                    <p class="mb-0" style={{ position: "fixed", bottom: "10px", width: "100%" }}>  Copyright © {new Date().getFullYear()} <b><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Kathmandu Technical School</Link></b>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;