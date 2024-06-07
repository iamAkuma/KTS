// src/components/CaregiverCard.js
import React from 'react';
import './CaregiverCard.css'; // Import custom CSS for the component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandHoldingHeart, faHandsHelping, faCocktail } from '@fortawesome/free-solid-svg-icons';

const CaregiverCard = () => {
    return (
        <div className="caregiver-cards-container">
            <h1 className='course-header'>Current Courses</h1> {/* Use h1 and center styling in JSX */}
            <div className="cards-wrapper">
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Caregiver/Aged Care</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Caregiver.jpg')} className="card-img-top img-fluid" alt="Caregivers" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Barista</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCoffee} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Barista.jpg')} className="card-img-top img-fluid" alt="Barista" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
            {/* Add the second row here */}
            <div className="cards-wrapper">
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Certificate III in Individual Support</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHandsHelping} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Cert.jpg')} className="card-img-top img-fluid" alt="Caregivers" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="card caregiver-card">
                    <div className="card-header bg-primary text-white">
                        <h3 className='card-head'>Bartender</h3>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCocktail} />
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={require('../../img/Bartender.jpg')} className="card-img-top img-fluid" alt="Bartender" />
                        <button className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverCard;
