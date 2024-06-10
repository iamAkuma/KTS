import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './two.css';

const One = () => {
    // Array of image details
    const images = [
        {
            src: require('../../img/Babita-Shrestha.jpeg'),
            alt: 'Babita Shrestha',
            name: 'Babita Shrestha'
        },
        {
            src: require('../../img/Binod-Rajbanshi.png'),
            alt: 'Binod Rajbanshi',
            name: 'Binod Rajbanshi'
        },
        {
            src: require('../../img/Bipina-Panta.jpg'),
            alt: 'Bipina Pant',
            name: 'Bipina Pant'
        },
        {
            src: require('../../img/Champa-Kala-Rai.jpg'),
            alt: 'Champa Kala Rai',
            name: 'Champa Kala Rai'
        },
        {
            src: require('../../img/Dali-Sherpa.jpg'),
            alt: 'Dali Sherpa',
            name: 'Dali Sherpa'
        },
        {
            src: require('../../img/Dhana-Kumari-Khanal-271x300.jpg'),
            alt: 'Dhana Kumari Khanal',
            name: 'Dhana Kumari Khanal'
        },
        {
            src: require('../../img/Gyanu-Maya-Tamang-256x300.jpeg'),
            alt: 'Gyanu Maya Tamang',
            name: 'Gyanu Maya Tamang'
        },
        {
            src: require('../../img/Juna-Dura-272x300.jpg'),
            alt: 'Juna Dura',
            name: 'Juna Dura'
        },
        {
            src: require('../../img/Jyoti-Singh-Rajbanshi-300x284.jpeg'),
            alt: 'Jyoti Singh Rajbanshi',
            name: 'Jyoti Singh Rajbanshi'
        },
        {
            src: require('../../img/Kalpana-Thapa-199x300.jpeg'),
            alt: 'Kalpana Tamang',
            name: 'Kalpana Tamang'
        },
        {
            src: require('../../img/Krishna-Prasad-Shrestha-199x300.jpeg'),
            alt: 'Krishna Prasad Shrestha',
            name: 'Krishna Prasad Shrestha'
        },
        {
            src: require('../../img/Lhamu-Sherpa-300x300.jpg'),
            alt: 'Lhamu Sherpa',
            name: 'Lhamu Sherpa'
        },
        {
            src: require('../../img/Maina-Tamang-255x300.jpg'),
            alt: 'Maina Tamang',
            name: 'Maina Tamang'
        },
        {
            src: require('../../img/Manisha-Sunar-300x260.jpeg'),
            alt: 'Manisha Sunar',
            name: 'Manisha Sunar'
        },
        {
            src: require('../../img/Manjari-Baniya-Budhathoki-233x300.jpeg'),
            alt: 'Manjari Baniya Budhathoki',
            name: 'Manjari Baniya Budhathoki'
        },
        {
            src: require('../../img/Mingma-Yangji-Sherpa-253x300.jpg'),
            alt: 'Mingma Yangji Sherpa',
            name: 'Mingma Yangji Sherpa'
        },
        {
            src: require('../../img/Mona-Bista-300x300.jpg'),
            alt: 'Mona Bista',
            name: 'Mona Bista'
        },
        {
            src: require('../../img/Namuna-Lamichane-284x300.jpg'),
            alt: 'Namuna Lamichhane',
            name: 'Namuna Lamichhane'
        },
        {
            src: require('../../img/Nisha-Rai-260x300.jpg'),
            alt: 'Nisha Rai',
            name: 'Nisha Rai'
        },
        {
            src: require('../../img/Parbati-Kumal-267x300.jpg'),
            alt: 'Parbati Kumal',
            name: 'Parbati Kumal'
        },
        {
            src: require('../../img/Radhika-Kumari-Rai-300x300.jpg'),
            alt: 'Radhika Kumari Rai',
            name: 'Radhika Kumari Rai'
        },
        {
            src: require('../../img/Pasang-Lhamu-Sherpa-228x300.jpeg'),
            alt: 'Pasang Lhamu Sherpa',
            name: 'Pasang Lhamu Sherpa'
        },
        {
            src: require('../../img/Prabin-Rimal-199x300.jpeg'),
            alt: 'Prabin Rimal',
            name: 'Prabin Rimal'
        },
        {
            src: require('../../img/Puja-Tamang-287x300.jpg'),
            alt: 'Puja Tamang',
            name: 'Puja Tamang'
        },
        {
            src: require('../../img/Radha-Rimal-199x300.jpg'),
            alt: 'Radha Rimal',
            name: 'Radha Rimal'
        },
        {
            src: require('../../img/Reetu-Baram.JPG'),
            alt: 'Reetu Baram',
            name: 'Reetu Baram'
        },
        {
            src: require('../../img/Rohit-Panta-199x300.jpeg'),
            alt: 'Rohit Panta',
            name: 'Rohit Panta'
        },
        {
            src: require('../../img/Rojina-Khadka-283x300.jpeg'),
            alt: 'Rojina Khadka',
            name: 'Rojina Khadka'
        },
        {
            src: require('../../img/Roshni-Rai-300x300.jpeg'),
            alt: 'Roshni Rai',
            name: 'Roshni Rai'
        },
        {
            src: require('../../img/Sabina-Bhandari-300x300.jpg'),
            alt: 'Sabina Bhandari',
            name: 'Sabina Bhandari'
        },
        {
            src: require('../../img/Salina-Kumal-292x300.jpeg'),
            alt: 'Salina Kumal',
            name: 'Salina Kumal'
        },
        {
            src: require('../../img/Sanju-Shrestha-300x300.jpg'),
            alt: 'Sanju Shrestha',
            name: 'Sanju Shrestha'
        },
        {
            src: require('../../img/Santosh-Dhimal-199x300.jpg'),
            alt: 'Santosh Dhimal',
            name: 'Santosh Dhimal'
        },
        {
            src: require('../../img/Sarita-Subedi-298x300.jpeg'),
            alt: 'Sarita Subedi',
            name: 'Sarita Subedi'
        },
        {
            src: require('../../img/Shamuel-Maharjan-199x300.jpeg'),
            alt: 'Shamuel Maharjan',
            name: 'Shamuel Maharjan'
        },
        {
            src: require('../../img/Sheetal-Dura-287x300.jpg'),
            alt: 'Sheetal Dura',
            name: 'Sheetal Dura'
        }
    ];

    return (
        <>
            <Navbar />
            <div>
                <h1 className='one-header'>
                    2080/81
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
