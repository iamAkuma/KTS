import React from 'react'
import Navbar from '../Navbar/Navbar'
import './News.css'
import { Row, Col } from 'react-bootstrap';

const News = () => {
    return (
        <>
            <Navbar />
            <h1 className='news-heading'>News / Articles</h1>
            <Row>
                <Col>
                    <div className='news-first-row'>
                        <img src={require('../../img/Cert.jpg')} alt="" className='news-img' />
                        <h2 className='news-title'>आईएमई समुहले काठमाडौ टेक्निकल स्कुल खोल्यो</h2>
                    </div>
                </Col>

                <Col>
                    <div className='news-first-row'>
                        <img src={require('../../img/Cert.jpg')} alt="" className='news-img' />
                        <h2 className='news-title'>आईएमई समुहले काठमाडौ टेक्निकल स्कुल खोल्यो</h2>
                    </div>
                </Col>

            </Row>




        </>
    )
}

export default News