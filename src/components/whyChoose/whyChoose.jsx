import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faToolbox, faGraduationCap, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const whyChoose = () => {
    return (
        <Container>
            <h2 className="text-center my-5">WHY CHOOSE US</h2>
            <p className="text-center mb-5">
                At KTS, we offer quality and in-demand courses that equip you with sought-after skills. We improve your learning experience by focusing on competency-based learning. We provide you with the opportunity to master the skills you need to move ahead in your career.
            </p>
            <Row className="mb-5">
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faUserGraduate} size="3x" className="mb-3" />
                    <h5>Organizational Training</h5>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faToolbox} size="3x" className="mb-3" />
                    <h5>Job Placement</h5>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x" className="mb-3" />
                    <h5>Vocational Training</h5>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faUserFriends} size="3x" className="mb-3" />
                    <h5>Industry Expert Faculty</h5>
                </Col>
            </Row>
            <img src="classroom.jpg" alt="Classroom" className="img-fluid" />
        </Container>
    )
}

export default whyChoose