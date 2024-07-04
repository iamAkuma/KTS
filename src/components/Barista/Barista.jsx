import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';

function Bartender() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Barista - KTS</title>
            </Helmet>
            <Container fluid className="unique-caregiver-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-caregiver-course-image">
                        <img src={require('../../img/Barista.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-caregiver-course-details">
                        <h1>Barista <br></br>
                            Course</h1>
                        <div className="underline"></div>
                        <div>
                            <p className="unique-caregiver-course-description">
                                The Barista Course is a hospitality management course that consists of theory and practical based approach to coffee. From the history of coffee to fancy drinks, our course covers it all!                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className='certificate'>
                                Our Barista Class offers a comprehensive exploration into the intricate world of coffee craftsmanship. Led by seasoned instructors deeply passionate about coffee, the program integrates theory with practical learning. Participants delve into the rich history of coffee, mastering both traditional and fancy recipes. It’s a journey designed for those eager to immerse themselves in the essence of coffee culture, fostering a deeper understanding and appreciation for the craft.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Bartender;