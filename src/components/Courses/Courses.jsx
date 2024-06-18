import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import CardComponent from './CourseCard'; // Adjust path as necessary
import './Courses.css'; // Adjust path as necessary

import image1 from '../../img/Caregiver.jpg';  // Update the paths to your images
import image2 from '../../img/Cert.jpg';
import image3 from '../../img/barista1.jpg';
import image4 from '../../img/cook.jpg';
import image5 from '../../img/bartenderr.jpg';
import image6 from '../../img/waiter.jpg';
import image7 from '../../img/house.jpg';


const Courses = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);

    const cardsData = [
        {
            image: image1,
            title: 'Caregiver / Aged Care Courses',
            description: 'Caregiver training is designed to produce competent human resources equipped with knowledge, skills, and attitudes related to the caregiving occupation.'
        },
        {
            image: image2,
            title: 'Certificate III in Individual Support (Ageing and Disability)',
            description: 'This course boosts skills in providing personalized care to the elderly in community and residential settings, addressing aging and disability-related needs with high-quality support and compassion.'
        },
        {
            image: image3,// Replace with actual paths
            title: 'Barista',
            description: 'Learn the art of making perfect coffee.'
        },
        {
            image: image4, // Replace with actual paths
            title: 'Commercial Cook / Baker',
            description: 'Become a skilled commercial cook or baker.'
        },
        {
            image: image5, // Replace with actual paths
            title: 'Bartender',
            description: 'Master the skills of bartending.'
        },
        {
            image: image6, // Replace with actual paths
            title: 'Waiter / Waitress',
            description: 'Train to be an efficient waiter or waitress.'
        },
        {
            image: image7, // Replace with actual paths
            title: 'Housekeeping Cleaner',
            description: 'Learn professional housekeeping skills.'
        }
    ];

    return (
        <>
            <Navbar />
            <LoadingScreen isLoading={isLoading} />
            <div className={`courses-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>Courses - Kathmandu Technical School</title>
                </Helmet>
                <div className='courses-page'> {/* Add this class */}
                    <h1 className='course-header'>Our Courses</h1>
                    <h3 className='course-sub'>Caregiver / Aged Care</h3>
                    <div className="row">
                        {cardsData.map((card, index) => (
                            <CardComponent
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Courses;
