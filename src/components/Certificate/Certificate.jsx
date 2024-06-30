import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Certificate.css';
import Navbar from '../Navbar/Navbar';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Certificate() {
    return (
        <>
            <Navbar />
            <Container fluid className="unique-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-course-image">
                        <img src={require('../../img/Cert3.jpeg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-course-details">
                        <h1>Certificate III in Individual Support (Ageing and Disability)</h1>
                        <div className="underline"></div>
                        <p className="unique-course-description">
                            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                            This course enhances your abilities in offering both physical and emotional aid to the elderly, focusing on care provision in community and residential environments.
                            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                        </p>
                        <Button href="#" variant="primary" size="lg">Download Course Details</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Certificate;
