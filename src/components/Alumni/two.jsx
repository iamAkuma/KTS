import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './two.css';
import { Helmet } from 'react-helmet';

const One = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>2080/81 - Kathmandu Technical School</title>
            </Helmet>
            <div>
                <h1 className='one-header'>2080/81</h1>
                <div className="pic-container">
                    <div className="pic-wrapper babita-shrestha">
                        <img src={require('../../img/Babita-Shrestha.jpeg')} alt="Babita Shrestha" className="pic" />
                        <p className="name">Babita Shrestha</p>
                    </div>
                    <div className="pic-wrapper binod-rajbanshi">
                        <img src={require('../../img/Binod-Rajbanshi.png')} alt="Binod Rajbanshi" className="pic-binod" />
                        <p className="name">Binod Rajbanshi</p>
                    </div>
                    <div className="pic-wrapper bipina-pant">
                        <img src={require('../../img/Bipina-Panta.jpg')} alt="Bipina Pant" className="pic" />
                        <p className="name">Bipina Pant</p>
                    </div>
                    <div className="pic-wrapper champa-kala-rai">
                        <img src={require('../../img/Champa-Kala-Rai.jpg')} alt="Champa Kala Rai" className="pic" />
                        <p className="name">Champa Kala Rai</p>
                    </div>
                    <div className="pic-wrapper dali-sherpa">
                        <img src={require('../../img/Dali-Sherpa.jpg')} alt="Dali Sherpa" className="pic" />
                        <p className="name">Dali Sherpa</p>
                    </div>
                    <div className="pic-wrapper dhana-kumari-khanal">
                        <img src={require('../../img/Dhana-Kumari-Khanal-271x300.jpg')} alt="Dhana Kumari Khanal" className="pic" />
                        <p className="name">Dhana Kumari Khanal</p>
                    </div>
                    <div className="pic-wrapper gyanu-maya-tamang">
                        <img src={require('../../img/Gyanu-Maya-Tamang-256x300.jpeg')} alt="Gyanu Maya Tamang" className="pic" />
                        <p className="name">Gyanu Maya Tamang</p>
                    </div>
                    <div className="pic-wrapper juna-dura">
                        <img src={require('../../img/Juna-Dura-272x300.jpg')} alt="Juna Dura" className="pic" />
                        <p className="name">Juna Dura</p>
                    </div>
                    <div className="pic-wrapper jyoti-singh-rajbanshi">
                        <img src={require('../../img/Jyoti-Singh-Rajbanshi-300x284.jpeg')} alt="Jyoti Singh Rajbanshi" className="pic" />
                        <p className="name">Jyoti Singh Rajbanshi</p>
                    </div>
                    <div className="pic-wrapper kalpana-tamang">
                        <img src={require('../../img/Kalpana-Thapa-199x300.jpeg')} alt="Kalpana Tamang" className="pic" />
                        <p className="name">Kalpana Tamang</p>
                    </div>
                    <div className="pic-wrapper krishna-prasad-shrestha">
                        <img src={require('../../img/Krishna-Prasad-Shrestha-199x300.jpeg')} alt="Krishna Prasad Shrestha" className="pic" />
                        <p className="name">Krishna Prasad Shrestha</p>
                    </div>
                    <div className="pic-wrapper lhamu-sherpa">
                        <img src={require('../../img/Lhamu-Sherpa-300x300.jpg')} alt="Lhamu Sherpa" className="pic" />
                        <p className="name">Lhamu Sherpa</p>
                    </div>
                    <div className="pic-wrapper maina-tamang">
                        <img src={require('../../img/Maina-Tamang-255x300.jpg')} alt="Maina Tamang" className="pic" />
                        <p className="name">Maina Tamang</p>
                    </div>
                    <div className="pic-wrapper manisha-sunar">
                        <img src={require('../../img/Manisha-Sunar-300x260.jpeg')} alt="Manisha Sunar" className="pic" />
                        <p className="name">Manisha Sunar</p>
                    </div>
                    <div className="pic-wrapper manjari-baniya-budhathoki">
                        <img src={require('../../img/Manjari-Baniya-Budhathoki-233x300.jpeg')} alt="Manjari Baniya Budhathoki" className="pic" />
                        <p className="name">Manjari Baniya Budhathoki</p>
                    </div>
                    <div className="pic-wrapper mingma-yangji-sherpa">
                        <img src={require('../../img/Mingma-Yangji-Sherpa-253x300.jpg')} alt="Mingma Yangji Sherpa" className="pic" />
                        <p className="name">Mingma Yangji Sherpa</p>
                    </div>
                    <div className="pic-wrapper mona-bista">
                        <img src={require('../../img/Mona-Bista-300x300.jpg')} alt="Mona Bista" className="pic" />
                        <p className="name">Mona Bista</p>
                    </div>
                    <div className="pic-wrapper namuna-lamichhane">
                        <img src={require('../../img/Namuna-Lamichane-284x300.jpg')} alt="Namuna Lamichhane" className="pic" />
                        <p className="name">Namuna Lamichhane</p>
                    </div>
                    <div className="pic-wrapper nisha-rai">
                        <img src={require('../../img/Nisha-Rai-260x300.jpg')} alt="Nisha Rai" className="pic-nisha" />
                        <p className="name">Nisha Rai</p>
                    </div>
                    <div className="pic-wrapper parbati-kumal">
                        <img src={require('../../img/Parbati-Kumal-267x300.jpg')} alt="Parbati Kumal" className="pic" />
                        <p className="name">Parbati Kumal</p>
                    </div>
                    <div className="pic-wrapper radhika-kumari-rai">
                        <img src={require('../../img/Radhika-Kumari-Rai-300x300.jpg')} alt="Radhika Kumari Rai" className="pic" />
                        <p className="name">Radhika Kumari Rai</p>
                    </div>
                    <div className="pic-wrapper pasang-lhamu-sherpa">
                        <img src={require('../../img/Pasang-Lhamu-Sherpa-228x300.jpeg')} alt="Pasang Lhamu Sherpa" className="pic-pasang" />
                        <p className="name">Pasang Lhamu Sherpa</p>
                    </div>
                    <div className="pic-wrapper prabin-rimal">
                        <img src={require('../../img/Prabin-Rimal-199x300.jpeg')} alt="Prabin Rimal" className="pic" />
                        <p className="name">Prabin Rimal</p>
                    </div>
                    <div className="pic-wrapper puja-tamang">
                        <img src={require('../../img/Puja-Tamang-287x300.jpg')} alt="Puja Tamang" className="pic" />
                        <p className="name">Puja Tamang</p>
                    </div>
                    <div className="pic-wrapper radha-rimal">
                        <img src={require('../../img/Radha-Rimal-199x300.jpg')} alt="Radha Rimal" className="pic" />
                        <p className="name">Radha Rimal</p>
                    </div>
                    <div className="pic-wrapper reetu-baram">
                        <img src={require('../../img/Reetu-Baram.JPG')} alt="Reetu Baram" className="pic" />
                        <p className="name">Reetu Baram</p>
                    </div>
                    <div className="pic-wrapper rohit-panta">
                        <img src={require('../../img/Rohit-Panta-199x300.jpeg')} alt="Rohit Panta" className="pic" />
                        <p className="name">Rohit Panta</p>
                    </div>
                    <div className="pic-wrapper rojina-khadka">
                        <img src={require('../../img/Rojina-Khadka-283x300.jpeg')} alt="Rojina Khadka" className="pic" />
                        <p className="name">Rojina Khadka</p>
                    </div>
                    <div className="pic-wrapper roshni-rai">
                        <img src={require('../../img/Roshni-Rai-300x300.jpeg')} alt="Roshni Rai" className="pic" />
                        <p className="name">Roshni Rai</p>
                    </div>
                    <div className="pic-wrapper sabina-bhandari">
                        <img src={require('../../img/Sabina-Bhandari-300x300.jpg')} alt="Sabina Bhandari" className="pic" />
                        <p className="name">Sabina Bhandari</p>
                    </div>
                    <div className="pic-wrapper salina-kumal">
                        <img src={require('../../img/Salina-Kumal-292x300.jpeg')} alt="Salina Kumal" className="pic" />
                        <p className="name">Salina Kumal</p>
                    </div>
                    <div className="pic-wrapper sanju-shrestha">
                        <img src={require('../../img/Sanju-Shrestha-300x300.jpg')} alt="Sanju Shrestha" className="pic" />
                        <p className="name">Sanju Shrestha</p>
                    </div>
                    <div className="pic-wrapper santosh-dhimal">
                        <img src={require('../../img/Santosh-Dhimal-199x300.jpg')} alt="Santosh Dhimal" className="pic" />
                        <p className="name">Santosh Dhimal</p>
                    </div>
                    <div className="pic-wrapper sarita-subedi">
                        <img src={require('../../img/Sarita-Subedi-298x300.jpeg')} alt="Sarita Subedi" className="pic" />
                        <p className="name">Sarita Subedi</p>
                    </div>
                    <div className="pic-wrapper shamuel-maharjan">
                        <img src={require('../../img/Shamuel-Maharjan-199x300.jpeg')} alt="Shamuel Maharjan" className="pic" />
                        <p className="name">Shamuel Maharjan</p>
                    </div>
                    <div className="pic-wrapper sheetal-dura">
                        <img src={require('../../img/Sheetal-Dura-287x300.jpg')} alt="Sheetal Dura" className="pic" />
                        <p className="name">Sheetal Dura</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default One;
