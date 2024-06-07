// src/Courses.js
import React from 'react';
import './Courses.css';


const Courses = () => {
    return (
        <div className="courses-container">
            <h2 className="text-center">CURRENT COURSES</h2>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="course-card">
                        <div className="course-image">
                            <img src={require('../../img/group.jpg')} alt="Caregiver" />
                        </div>
                        <div className="course-content">
                            <h3>Caregiver</h3>
                            <div className="course-icon">
                                <i className="fa fa-puzzle-piece"></i>
                            </div>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="course-card">
                        <div className="course-image">
                            <img src={require('../../img/classroom.jpg')} alt="Certificate III in Individual Support" />
                        </div>
                        <div className="course-content">
                            <h3>Certificate III in Individual Support</h3>
                            <div className="course-icon">
                                <i className="fa fa-puzzle-piece"></i>
                            </div>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;