import React from 'react';
import './Empower.css';

const MissionVision = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="mb-2" style={{ fontWeight: 'bolder' }}>EMPOWERING YOUTH</h1>
            <h1 className="mb-5" style={{ fontWeight: 'bolder' }}>EMPOWERING NATION</h1>

            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card p-3 h-100">
                        <div className="card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h5 className="card-title">Our Mission</h5>
                            <hr className="divider" />
                            <p className="card-text">
                                To train and nurture socially responsible, technically competent, and future-ready generation of youth through industry and job-specific training, courses, and opportunities led by industry leaders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card p-3 h-100">
                        <div className="card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h5 className="card-title">Our Vision</h5>
                            <hr className="divider" />
                            <p className="card-text">
                                To build an empowering national and regional ecosystem where job creators and job seekers find their perfect fit in a demanding market.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card p-3 h-100">
                        <div className="card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-comment-dots"></i>
                            </div>
                            <h5 className="card-title">Our Statement</h5>
                            <hr className="divider" />
                            <p className="card-text">
                                Empowering people, Increasing employability, Driving the Economy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card p-3 h-100">
                        <div className="card-body">
                            <div className="icon mb-3">
                                <i className="fas fa-atom"></i>
                            </div>
                            <h5 className="card-title">Core Values</h5>
                            <hr className="divider" />
                            <p className="card-text">
                                Excellence<br />
                                Diversity<br />
                                Inclusiveness<br />
                                Respect<br />
                                Innovation<br />
                                Creativity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;