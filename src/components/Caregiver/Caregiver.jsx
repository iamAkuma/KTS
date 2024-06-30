import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Caregiver.css';
import Navbar from '../Navbar/Navbar';
import pdfFile from '../../img/Caregiver-Course-2079.pdf'
import Footer from '../Footer/Footer'

function Caregiver() {
    return (
        <>
            <Navbar />
            <Container fluid className="unique-caregiver-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-caregiver-course-image">
                        <img src={require('../../img/Cert3.jpeg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-caregiver-course-details">
                        <h1>Caregiver
                            Course</h1>
                        <div className="underline"></div>
                        <div>
                            <p className="unique-caregiver-course-description">
                                Devoting yourself to the service and welfare of others is a wonderful act, that's why I chose to become a Caregiver.                            </p>
                        </div>
                        <Button href={pdfFile} variant="primary" size="lg">Download Course Details</Button>
                    </Col>
                    <Col>
                        <div>
                            <p className='certificate'>
                                Caregiver training is a comprehensive program designed to cultivate competent individuals capable of fulfilling the demands of the caregiving profession. The primary objective is to impart knowledge, skills, and attitudes essential for effective caregiving. The training encompasses various critical aspects to ensure that the trainees are well-rounded and capable of addressing diverse needs in different caregiving settings.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Caregiver;