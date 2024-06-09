import React from 'react';
import './ContactForm.css';


const ContactForm = () => {
    return (
        <div className="contact-form-container container-fluid text-white">
            <div className="row">
                <div className="col-md-5 contact-info">
                    <h2>Contact Us</h2>
                    <div className="contact-detail">
                        <div>
                            <p>Address</p>
                            <p>Sukedhara, Kathmandu, Nepal</p>
                        </div>
                    </div>
                    <hr />
                    <div className="contact-detail">
                        <div>
                            <p>Phone</p>
                            <p>+977 9762782465</p>
                            <p>+977 9801482465</p>
                        </div>
                    </div>
                    <hr />
                    <div className="contact-detail">
                        <div>
                            <p>Email</p>
                            <p>info@ktsnepal.com</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col-md-7">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="tel" className="form-control" id="telephone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Which course are you interested in?</label>
                            <select className="form-control" id="course" required>
                                <option>Caregiver / Aged Care</option>
                                <option>Barista</option>
                                <option>Bartender</option>
                                <option>Commercial Cook/Baker</option>
                                <option>Waiter/Waitress</option>
                                <option>Housekeeping Cleaner</option>
                            </select>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;