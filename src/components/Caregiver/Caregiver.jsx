import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Caregiver.css';
import Navbar from '../Navbar/Navbar';
import pdfFile from '../../img/Caregiver-Course-2079.pdf';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import CustomAccordion from './CustomAccordion';

const accordionItems = [
    {
        title: 'Environment',
        content: 'Trainees learn to create and maintain a conducive environment for caregiving. This involves understanding safety protocols, creating a comfortable atmosphere for care recipients, and adapting to different settings such as homes, hospitals, or care centers.',
    },
    {
        title: 'Health and Sanitation',
        content: 'A crucial aspect of caregiver training is educating individuals on maintaining a clean and sanitary environment. Trainees learn about hygiene practices, infection control, and the importance of promoting overall health and well-being.',
    },
    {
        title: 'Nutrition',
        content: 'Caregivers are trained to provide appropriate nutrition based on the needs of their care recipients. This includes meal planning, dietary restrictions, and ensuring that individuals under their care receive balanced and nourishing meals.',
    },
    {
        title: 'Emergency and First Aid  ',
        content: 'Caregivers are trained to provide appropriate nutrition based on the needs of their care recipients. This includes meal planning, dietary restrictions, and ensuring that individuals under their care receive balanced and nourishing meals.',
    },
    {
        title: 'Hygienic Care',
        content: 'This involves training in personal care and hygiene practices for care recipients. Caregivers learn how to assist with activities of daily living, maintain personal cleanliness, and ensure the dignity and comfort of those under their care.',
    },
];

function Caregiver() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Caregiver Course - KTS</title>
            </Helmet>
            <Container fluid className="unique-course-container">
                <Row className="align-items-center">
                    <Col md={6} className="unique-course-image">
                        <img src={require('../../img/Caregiver.jpg')} alt="Course" className="img-fluid" />
                    </Col>
                    <Col md={6} className="unique-course-details">
                        <h1>Caregiver Course</h1>
                        <div className="underline"></div>
                        <div>
                            <p className="unique-course-description">
                                Devoting yourself to the service and welfare of others is a wonderful act, that's why I chose to become a Caregiver.
                            </p>
                        </div>
                        <Button href={pdfFile} variant="primary" size="lg" className="thichne-kura">Download Course Details</Button>
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
            <Container className="mt-5">
                <CustomAccordion items={accordionItems} />
            </Container>
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="unique-card p-3 h-100">
                        <div className="unique-card-body">
                            <div className="icon mb-3">
                            </div>
                            <h1 className="unique-card-title">Why?</h1>
                            <hr className="divider" />
                            <div className="unique-card-text">
                                <ul>
                                    <li><b>Enhanced Skills:</b> Caregiver courses improve abilities in safety, hygiene, healthcare, and essential areas.</li>
                                </ul>

                                <ul>
                                    <li>
                                        <b>Improved Engagement:</b> Training fosters better understanding and empathy, enhancing effective caregiving.

                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <b>Career Advancement:</b> Opportunities for growth, including paid orientation and ongoing training, contribute to professional development.

                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <b>Positive Contribution:</b>  Caregivers contribute positively by fostering dignity and kindness in relationships.

                                    </li>

                                </ul>

                                <ul>
                                    <li>
                                        Empowerment: Professional training empowers caregivers, boosting job satisfaction.
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Caregiver;
