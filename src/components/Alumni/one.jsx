import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './one.css';

const One = () => {
  // Array of image details
  const images = [
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

  return (
    <>
      <Navbar />
      <div>
        <h1 className='one-header'>
          2079/80
        </h1>
        {/* Image section */}
        <div className="image-container">
          {/* Map over the images array */}
          {images.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="image" />
              <p className="name">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default One;
