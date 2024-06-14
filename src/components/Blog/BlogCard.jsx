/* eslint-disable jsx-a11y/anchor-is-valid */
// BlogCard.js
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title, description }) => {
    return (
        <div className="card blog-card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;