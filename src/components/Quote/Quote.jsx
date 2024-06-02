import React from 'react';
import './Quote.css';

const Quote = () => {
    return (
        <div className="quote-section">
            <div className="quote-container">
                <div className="quote-icon-left">
                    <span>&ldquo;</span>
                </div>
                <p className="quote-text">
                    We strive to provide skills advancement course to youth that prepares them for employability in both national and global labor markets.
                </p>
                <div className="quote-icon-right">
                    <span>&rdquo;</span>
                </div>
            </div>
        </div>
    );
};

export default Quote;
