import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import './Courses.css'; // Adjust path as necessary

const Courses = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <LoadingScreen isLoading={isLoading} />
            <div className={`courses-container ${isLoading ? 'hidden' : 'visible'}`}>

                <Helmet>
                    <title>Courses - Kathmandu Technical School</title>
                </Helmet>
                <div>
                    <h1 className='text-center'>Courses</h1>
                    {/* Add more content here */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Courses;
