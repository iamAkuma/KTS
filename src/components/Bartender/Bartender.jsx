import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Bartender.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

function Bartender() {
    return (
        <>
            <Navbar />
            <Container fluid className="unique-caregiver-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-caregiver-course-image">
                        <img src={require('../../img/Bartender.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-caregiver-course-details">
                        <h1>Bartender</h1>
                        <div className="underline"></div>
                        <div>
                            <p className="unique-caregiver-course-description">
                                The Bartender Class trains in mixology,
                                beverage service, and bar management. Led by experienced instructors,
                                it prepares individuals for success in bartending.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='certificate'>
                                The Bartender Class is an immersive training
                                program tailored to individuals seeking mastery in the art of mixology,
                                beverage service, and bar management. With a perfect blend of hands-on practice
                                and comprehensive theoretical instruction, students delve into the intricate
                                world of crafting cocktails, mastering liquor knowledge, honing customer
                                service skills, and understanding the nuances of effective bar management.
                                Guided by seasoned professionals, participants are equipped not only with
                                technical expertise but also with the confidence and
                                finesse required to thrive in the dynamic and fast-paced environment of bartending.                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Bartender;