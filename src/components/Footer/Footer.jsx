import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled text-center">
                                <li>+977 01 5912297</li>
                                <li>info@ktsnepal.com</li>
                                <li>Sukedhara, Kathmandu, Nepal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-end">
                            <a href="/" className="text-black mr-4">Home</a>
                            <a href="/alumni" className="text-black mr-4">Alumni</a>
                            <a href="/courses" className="text-black mr-4">Courses</a>
                            <a href="/blog" className="text-black mr-4">Blog</a>
                            <a href="/contact" className="text-black">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="mb-0">Copyright © {new Date().getFullYear()} Kathmandu Technical School</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;