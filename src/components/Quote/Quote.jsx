import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Quote = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <blockquote className="blockquote">
                        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                        <p>
                            We strive to provide skills advancement course to youth that prepares them for
                            employability in both national and global labor markets.
                        </p>
                        <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                    </blockquote>
                </div>
                <div className="col-md-6">
                    {/* Add your image or other visual element here */}
                </div>
            </div>
        </div>
    );
};

export default Quote;