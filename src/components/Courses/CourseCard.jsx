/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CourseCard.css';

const CardComponent = ({ image, title, description }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-img-top" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="card-body bg-primary text-white">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-light">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
