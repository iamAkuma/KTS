import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoadingScreen from '../LoadingScreen/LoadingScreen'; // Adjust path as necessary
import './Blogs.css'; // Adjust path as necessary

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

                <div>
                    <h1 className='text-center'>KTS Blogs</h1>
                    {/* Add your blog content here */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Blogs;
