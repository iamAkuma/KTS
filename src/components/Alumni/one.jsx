/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './one.css'

const One = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='text-center'>
          2079/80
        </h1>
        {/* Image section */}
        <div className="image-container">
          {/* Place your images here */}
          <img src={require('../../img/Amita-Raut.jpg')} alt="Image 1" className="image" />
          <img src={require('../../img/Amrita-Sunuwar.jpg')} alt="Image 2" className="image" />
          <img src={require('../../img/Bikram-Puri-903x1024.jpg')} alt="Image 3" className="image" />
          <img src={require('../../img/Durga-Manandhar-1024x995.jpg')} alt="Image 4" className="image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default One;
