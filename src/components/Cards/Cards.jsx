// src/components/CaregiverCard.js
import React from 'react';
import './CaregiverCard.css'; // Import custom CSS for the component

const CaregiverCard = () => {
    return (
        <div className="caregiver-cards-container">
            <h1 className='course-header'>Current Courses</h1> {/* Use h1 and center styling in JSX */}
            <div className="cards-wrapper">
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Caregiver/Aged Care</h3>
                        <div className="icon-container">
                            <i className="fa fa-user-md" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/classroom.jpg')} className="card-img-top img-fluid" alt="Caregivers" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Caregiver/Aged Care</h3>
                        <div className="icon-container">
                            <i className="fa fa-user-md" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/classroom.jpg')} className="card-img-top img-fluid" alt="Caregivers" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverCard;