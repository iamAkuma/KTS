// /* eslint-disable react/style-prop-object */
// /* eslint-disable react/jsx-no-target-blank */
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <footer className="text-center py-5 mt-5">
//             <h1 className="display-6 fw-bold d-flex justify-content-center">Contact Us</h1>
//             <div className="d-flex justify-content-center">
//                 <div className="col-md-8 text-center">
//                     <p className="fs-5">
//                         <i className="fas fa-phone-alt me-3"></i> +977 01 5912297
//                     </p>
//                     <p className="fs-5">
//                         <i className="fas fa-envelope me-3"></i>
//                         <a href="mailto:info@ktsnepal.com" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
//                             info@ktsnepal.com
//                         </a>
//                     </p>
//                     <p className="fs-5">
//                         <i className="fas fa-map-marker-alt me-3"></i>
//                         <a
//                             href="https://maps.app.goo.gl/rM3pUwdj9aKmL9cm9"
//                             target="_blank"
//                             style={{ textDecoration: 'none', color: 'black' }}
//                         >
//                             Sukedhara, Kathmandu, Nepal
//                         </a>
//                     </p>
//                 </div>
//             </div>
//             <nav className="d-flex justify-content-center mb-4">
//                 <Link className="nav-link mx-3" to="/" style={{ color: '#2b3991', fontWeight: 'bold' }}>Home</Link>
//                 <Link className="nav-link mx-3" style={{ color: '#2b3991', fontWeight: 'bold' }}>Alumni</Link>
//                 <Link className="nav-link mx-3" to="/courses" style={{ color: '#2b3991', fontWeight: 'bold' }}>Courses</Link>
//                 <Link className="nav-link mx-3" to="/blog" style={{ color: '#2b3991', fontWeight: 'bold' }}>Blog</Link>
//                 <Link className="nav-link mx-3" to="/contact" style={{ color: '#2b3991', fontWeight: 'bold' }}>Contact</Link>
//             </nav>
//             <div class="grid container">
//                 <div class="content"> </div>
//                 <footer class="footer">
//                     <div class="col d-flex justify-content-center">
//                         <p class="mb-0">Copyright © {new Date().getFullYear()} <b><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Kathmandu Technical School</Link></b></p>
//                     </div>
//                 </footer>
//             </div>


//         </footer>
//     );
// };

// export default Footer;


/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center py-5 mt-5">
            <div className="container">
                <h1 className="display-6 fw-bold">Contact Us</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="contact-details">
                            <p className="fs-5">
                                <div className="phone" style={{ textDecoration: 'none', color: 'black' }}>
                                    <i className="fas fa-phone-alt me-3" style={{ textDecoration: 'none', color: '2b3991' }}></i>
                                    +977 01 5912297</div>
                            </p>
                            <p className="fs-5">
                                <i className="fas fa-envelope me-3" style={{ textDecoration: 'none', color: '#2b3991' }}></i>
                                <a href="mailto:info@ktsnepal.com" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                                    info@ktsnepal.com
                                </a>
                            </p>
                            <p className="fs-5">
                                <i className="fas fa-map-marker-alt me-3" style={{ textDecoration: 'none', color: '#2b3991' }}></i>
                                <a href="https://maps.app.goo.gl/rM3pUwdj9aKmL9cm9" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                                    Sukedhara, Kathmandu, Nepal
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="d-flex justify-content-center mb-4">
                    <Link className="nav-link mx-3 footer-nav-link" to="/">Home</Link>
                    <Link className="nav-link mx-3 footer-nav-link" to="/alumni">Alumni</Link>
                    <Link className="nav-link mx-3 footer-nav-link" to="/courses">Courses</Link>
                    <Link className="nav-link mx-3 footer-nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link mx-3 footer-nav-link" to="/contact">Contact</Link>
                </nav>
                <div className="text-center">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <b>
                        <Link className="footer-link" to="/">Kathmandu Technical School</Link>
                    </b></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;