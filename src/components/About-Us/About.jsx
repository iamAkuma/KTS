import React from 'react';
import './About.css'; // Custom CSS for additional styling

function AboutUs() {
    return (
        <div className="container my-5 about-us-container">
            <div className="row">
                <div className="col-12">
                    <div className="image-line-wrapper">
                        <h2 className="about-us-heading">ABOUT US</h2>
                        {/* <div className="line"></div> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={require('../../img/building.jpg')} alt="Building" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center about-us-container">
                    <p>The job market is evolving and changing quicker than ever before and so should you. At times like these, it is natural for both the job providers and job seekers to experience skill gaps.</p>
                    <p>At KTS, we work towards solving this very problem. We have identified skill gaps across various industries and curated courses that train, empower, and equip our learners to take on the world!</p>
                    <p>We provide courses that provide foundational skills, core skills, and specific skills to individuals so that they can easily fit into institutions within specific industries.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;