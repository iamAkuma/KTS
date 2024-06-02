import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faToolbox, faGraduationCap, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './whyChoose.css';

const WhyChooseUs = () => {
    return (
        <div className="whyChoose-container">
            <Container className="my-5">
                <div className="whyChoose-line-wrapper">
                    <h2 className="font-weight-bold">WHY CHOOSE US</h2>
                    <div className="line"></div>
                </div>
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <p>At KTS, we offer quality and in-demand courses that equip you with sought-after skills. We improve your learning experience by focusing on competency-based learning. We provide you with the opportunity to master the skills you need to move ahead in your career.</p>
                        <p>The emphasis is on demonstrating profound understanding through application. Each student's learning experience is personalized by our trainers and teachers, who make sure that you have complete mastery of the course before graduating.</p>
                    </Col>
                    <Col md={6}>
                        <img src={require('../../img/classroom.jpg')} alt="Classroom" className="img-fluid" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6} className="text-center">
                        <FontAwesomeIcon icon={faUserGraduate} size="1x" className="mb-3" style={{ color: '#2b3991' }} />
                        <h5>Organizational Training</h5>
                    </Col>
                    <Col md={6} className="text-center">
                        <FontAwesomeIcon icon={faToolbox} size="1x" className="mb-3" style={{ color: '#2b3991' }} />
                        <h5>Job Placement</h5>
                    </Col>
                    <Col md={6} className="text-center">
                        <FontAwesomeIcon icon={faGraduationCap} size="1x" className="mb-3" style={{ color: '#2b3991' }} />
                        <h5>Vocational Training</h5>
                    </Col>
                    <Col md={6} className="text-center">
                        <FontAwesomeIcon icon={faUserFriends} size="1x" className="mb-3" style={{ color: '#2b3991' }} />
                        <h5>Industry Expert Faculty</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;