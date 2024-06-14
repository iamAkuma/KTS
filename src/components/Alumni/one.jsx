import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import './one.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const One = () => {

    const pictures = [
        {
            src: require('../../img/Amita-Raut.jpg'),
            alt: 'Amita Raut',
            name: 'Amita Raut'
        },
        {
            src: require('../../img/Amrita-Sunuwar.jpg'),
            alt: 'Amrita Sunuwar',
            name: 'Amrita Sunuwar'
        },
        {
            src: require('../../img/Bikram-Puri-903x1024.jpg'),
            alt: 'Bikram Puri',
            name: 'Bikram Puri'
        },
        {
            src: require('../../img/Durga-Manandhar-1024x995.jpg'),
            alt: 'Durga Manandhar',
            name: 'Durga Manandhar'
        },
        {
            src: require('../../img/Reyzina-Pujari.jpeg'),
            alt: 'Reyzina Pujari',
            name: 'Reyzina Pujari'
        },
        {
            src: require('../../img/Ritu-Sinha-842x1024.jpeg'),
            alt: 'Ritu Kumari Sinha',
            name: 'Ritu Kumari Sinha'
        },
        {
            src: require('../../img/Saraswati-Gurung-874x1024.jpg'),
            alt: 'Saraswati Gurung',
            name: 'Saraswati Gurung'
        },
        {
            src: require('../../img/Sujana-Adhikari.jpeg'),
            alt: 'Sujana Adhikari',
            name: 'Sujana Adhikari'
        }
    ];


    const [isLoading, setIsLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(pictures.map(() => true));

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = (index) => {
        setImageLoading((prev) => {
            const newImageLoading = [...prev];
            newImageLoading[index] = false;
            return newImageLoading;
        });
    };

    // Array of image details


    return (
        <>
            <Navbar />
            <LoadingScreen isLoading={isLoading} />
            <div className={`pic-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>2079/80 - Kathmandu Technical School</title>
                </Helmet>
                <div>
                    <h1 className='one-header'>2079/80</h1>
                    {/* Image section */}
                    <div className="pic-container">
                        {pictures.map((picture, index) => (
                            <div className="pic-wrapper" key={index}>
                                {imageLoading[index] ? (
                                    <>
                                        <div className="skeleton"></div>
                                        <div className="skeleton-text"></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={picture.src}
                                            alt={picture.alt}
                                            className="image"
                                            onLoad={() => handleImageLoad(index)}
                                        />
                                        <p className="name">{picture.name}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default One;
