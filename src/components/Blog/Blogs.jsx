import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import './Blogs.css'; // Adjust path as necessary
import BlogCard from './BlogCard.jsx';

const Blogs = () => {
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
            <div className={`blogs-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>Blogs - Kathmandu Technical School</title>
                </Helmet>

                <div className="container">
                    <h1 className='kts-blogs'>KTS BLOGS</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <BlogCard
                                image={require('../../img/Caregiver.jpg')}
                                title="Why Caregiver Course in KTS?"
                                description="Taking a caregiver course is becoming increasingly important in today’s world due to the growing demand..."
                            />
                        </div>
                        <div className="col-md-4">
                            <BlogCard
                                image={require('../../img/Caregiver.jpg')}
                                title="Why Caregiver Course in KTS?"
                                description="Taking a caregiver course is becoming increasingly important in today’s world due to the growing demand..."
                            />
                        </div>
                        <div className="col-md-4">
                            <BlogCard
                                image={require('../../img/Caregiver.jpg')}
                                title="Why Caregiver Course in KTS?"
                                description="Taking a caregiver course is becoming increasingly important in today’s world due to the growing demand..."
                            />
                        </div>
                    </div>
                    {/* Add more rows with three BlogCard components as needed */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Blogs;