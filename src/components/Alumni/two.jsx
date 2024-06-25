import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './two.css';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import LazyLoad from 'react-lazyload'; // Import LazyLoad

const Two = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <LoadingScreen isLoading={isLoading} />
            <div className={`pic-container ${isLoading ? 'hidden' : 'visible'}`}>
                <Helmet>
                    <title>2080/81 - Kathmandu Technical School</title>
                </Helmet>
                <div>
                    <h1 className='one-header'>2080/81</h1>
                    <div className="pic-container">
                        <div className="pic-wrapper babita-shrestha">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Babita-Shrestha.jpeg')} alt="Babita Shrestha" className="pic" />
                            </LazyLoad>
                            <p className="name">Babita Shrestha</p>
                        </div>
                        <div className="pic-wrapper binod-rajbanshi">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Binod-Rajbanshi.png')} alt="Binod Rajbanshi" className="pic-binod" />
                            </LazyLoad>
                            <p className="name">Binod Rajbanshi</p>
                        </div>

                        <div className="pic-wrapper bipina-pant">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Bipina-Panta.jpg')} alt="Bipina Pant" className="pic" />
                            </LazyLoad>
                            <p className="name">Bipina Pant</p>
                        </div>

                        <div className="pic-wrapper champa-kala-rai">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Champa-Kala-Rai.jpg')} alt="Champa Kala Rai" className="pic" />
                            </LazyLoad>
                            <p className="name">Champa Kala Rai</p>
                        </div>

                        <div className="pic-wrapper dali-sherpa">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Dali-Sherpa.jpg')} alt="Dali Sherpa" className="pic" />
                            </LazyLoad>
                            <p className="name">Dali Sherpa</p>
                        </div>

                        <div className="pic-wrapper dhana-kumari-khanal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Dhana-Kumari-Khanal-271x300.jpg')} alt="Dhana Kumari Khanal" className="pic" />
                            </LazyLoad>
                            <p className="name">Dhana Kumari Khanal</p>
                        </div>

                        <div className="pic-wrapper doma">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Doma.JPG')} alt="Doma" className="pic" />
                            </LazyLoad>
                            <p className="name">Doma Rajgarhia</p>
                        </div>

                        <div className="pic-wrapper ganga-gharti-magar">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Ganga Gharti Magar.JPG')} alt="Ganga Gharti Magar" className="pic" />
                            </LazyLoad>
                            <p className="name">Ganga Gharti Magar</p>
                        </div>

                        <div className="pic-wrapper goma-gurung">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Goma Gurung.jpg')} alt="Goma Gurung" className="pic" />
                            </LazyLoad>
                            <p className="name">Goma Gurung</p>
                        </div>

                        <div className="pic-wrapper gyanu-maya-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Gyanu-Maya-Tamang-256x300.jpeg')} alt="Gyanu Maya Tamang" className="pic-gyanu" />
                            </LazyLoad>
                            <p className="name">Gyanu Maya Tamang</p>
                        </div>

                        <div className="pic-wrapper jasmita-sunar-rasaili">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Jasmita Sunar Rasaili .jpeg')} alt="Jasmita Sunar Rasaili" className="pic-jasmi" />
                            </LazyLoad>
                            <p className="name">Jasmita Sunar Rasaili</p>
                        </div>

                        <div className="pic-wrapper juna-dura">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Juna-Dura-272x300.jpg')} alt="Juna Dura" className="pic" />
                            </LazyLoad>
                            <p className="name">Juna Dura</p>
                        </div>
                        <div className="pic-wrapper jyoti-singh-rajbanshi">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Jyoti-Singh-Rajbanshi-300x284.jpeg')} alt="Jyoti Singh Rajbanshi" className="pic" />
                            </LazyLoad>
                            <p className="name">Jyoti Singh Rajbanshi</p>
                        </div>

                        <div className="pic-wrapper kalpana-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Kalpana-Thapa-199x300.jpeg')} alt="Kalpana Tamang" className="pic" />
                            </LazyLoad>
                            <p className="name">Kalpana Tamang</p>
                        </div>

                        <div className="pic-wrapper krishna-prasad-shrestha">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Krishna-Prasad-Shrestha-199x300.jpeg')} alt="Krishna Prasad Shrestha" className="pic" />
                            </LazyLoad>
                            <p className="name">Krishna Prasad Shrestha</p>
                        </div>

                        <div className="pic-wrapper lhamu-sherpa">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Lhamu-Sherpa-300x300.jpg')} alt="Lhamu Sherpa" className="pic" />
                            </LazyLoad>
                            <p className="name">Lhamu Sherpa</p>
                        </div>

                        <div className="pic-wrapper maina-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Maina-Tamang-255x300.jpg')} alt="Maina Tamang" className="pic" />
                            </LazyLoad>
                            <p className="name">Maina Tamang</p>
                        </div>

                        <div className="pic-wrapper manisha-b-k">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Manisha B.K.JPG')} alt="Manisha B.K" className="pic" />
                            </LazyLoad>
                            <p className="name">Manisha B.K</p>
                        </div>

                        <div className="pic-wrapper manisha-sunar">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Manisha-Sunar-300x260.jpeg')} alt="Manisha Sunar" className="pic" />
                            </LazyLoad>
                            <p className="name">Manisha Sunar</p>
                        </div>

                        <div className="pic-wrapper manita-thapa">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Manita Thapa.jpeg')} alt="Manita Thapa" className="pic" />
                            </LazyLoad>
                            <p className="name">Manita Thapa</p>
                        </div>

                        <div className="pic-wrapper manjari-baniya-budhathoki">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Manjari-Baniya-Budhathoki-233x300.jpeg')} alt="Manjari Baniya Budhathoki" className="pic" />
                            </LazyLoad>
                            <p className="name">Manjari Baniya Budhathoki</p>
                        </div>

                        <div className="pic-wrapper mingma-yangji-sherpa">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Mingma-Yangji-Sherpa-253x300.jpg')} alt="Mingma Yangji Sherpa" className="pic" />
                            </LazyLoad>
                            <p className="name">Mingma Yangji Sherpa</p>
                        </div>

                        <div className="pic-wrapper mira-devkota">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Mira Devkota.JPG')} alt="Mira Devkota" className="pic" />
                            </LazyLoad>
                            <p className="name">Mira Devkota</p>
                        </div>

                        <div className="pic-wrapper mona-bista">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Mona-Bista-300x300.jpg')} alt="Mona Bista" className="pic" />
                            </LazyLoad>
                            <p className="name">Mona Bista</p>
                        </div>
                        <div className="pic-wrapper namrata-gurung">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Namrata Gurung.JPG')} alt="Namrata Gurung" className="pic" />
                            </LazyLoad>
                            <p className="name">Namrata Gurung</p>
                        </div>
                        <div className="pic-wrapper namuna-lamichhane">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Namuna-Lamichane-284x300.jpg')} alt="Namuna Lamichhane" className="pic" />
                            </LazyLoad>
                            <p className="name">Namuna Lamichhane</p>
                        </div>
                        <div className="pic-wrapper neha-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Neha Tamang.JPG')} alt="Neha Tamang" className="pic" />
                            </LazyLoad>
                            <p className="name">Neha Tamang</p>
                        </div>
                        <div className="pic-wrapper nisha-rai">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Nisha-Rai-260x300.jpg')} alt="Nisha Rai" className="pic-nisha" />
                            </LazyLoad>
                            <p className="name">Nisha Rai</p>
                        </div>
                        <div className="pic-wrapper pallavi-singh-magaiya">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Pallavi-Singh-Magaiya.jpg')} alt="Pallavi Singh Magaiya" className="pic" />
                            </LazyLoad>
                            <p className="name">Pallavi Singh Magaiya</p>
                        </div>
                        <div className="pic-wrapper parbati-kumal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Parbati-Kumal-267x300.jpg')} alt="Parbati Kumal" className="pic" />
                            </LazyLoad>
                            <p className="name">Parbati Kumal</p>
                        </div>
                        <div className="pic-wrapper pasang-lhamu-sherpa">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Pasang-Lhamu-Sherpa-228x300.jpeg')} alt="Pasang Lhamu Sherpa" className="pic-pasang" />
                            </LazyLoad>
                            <p className="name">Pasang Lhamu Sherpa</p>
                        </div>
                        <div className="pic-wrapper prabin-rimal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Prabin-Rimal-199x300.jpeg')} alt="Prabin Rimal" className="pic" />
                            </LazyLoad>
                            <p className="name">Prabin Rimal</p>
                        </div>
                        <div className="pic-wrapper puja-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Puja-Tamang-287x300.jpg')} alt="Puja Tamang" className="pic" />
                            </LazyLoad>
                            <p className="name">Puja Tamang</p>
                        </div>
                        <div className="pic-wrapper radha-rimal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Radha-Rimal-199x300.jpg')} alt="Radha Rimal" className="pic" />
                            </LazyLoad>
                            <p className="name">Radha Rimal</p>
                        </div>
                        <div className="pic-wrapper ram-maya-lama">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Ram Maya Lama.jpeg')} alt="Ram Maya Lama" className="pic" />
                            </LazyLoad>
                            <p className="name">Ram Maya Lama</p>
                        </div>
                        <div className="pic-wrapper rashmi-gurung">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Rashmi-Gurung.JPG')} alt="Rashmi Gurung" className="pic" />
                            </LazyLoad>
                            <p className="name">Rashmi Gurung</p>
                        </div>

                        <div className="pic-wrapper reetu-baram">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Reetu-Baram.JPG')} alt="Reetu Baram" className="pic" />
                            </LazyLoad>
                            <p className="name">Reetu Baram</p>
                        </div>
                        <div className="pic-wrapper rohit-panta">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Rohit-Panta-199x300.jpeg')} alt="Rohit Panta" className="pic" />
                            </LazyLoad>
                            <p className="name">Rohit Panta</p>
                        </div>
                        <div className="pic-wrapper rojina-khadka">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Rojina-Khadka-283x300.jpeg')} alt="Rojina Khadka" className="pic" />
                            </LazyLoad>
                            <p className="name">Rojina Khadka</p>
                        </div>
                        <div className="pic-wrapper roshni-rai">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Roshni-Rai-300x300.jpeg')} alt="Roshni Rai" className="pic" />
                            </LazyLoad>
                            <p className="name">Roshni Rai</p>
                        </div>
                        <div className="pic-wrapper sabina-bhandari">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Sabina-Bhandari-300x300.jpg')} alt="Sabina Bhandari" className="pic" />
                            </LazyLoad>
                            <p className="name">Sabina Bhandari</p>
                        </div>
                        <div className="pic-wrapper salina-kumal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Salina-Kumal-292x300.jpeg')} alt="Salina Kumal" className="pic" />
                            </LazyLoad>
                            <p className="name">Salina Kumal</p>
                        </div>
                        <div className="pic-wrapper sanju-shrestha">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Sanju-Shrestha-300x300.jpg')} alt="Sanju Shrestha" className="pic" />
                            </LazyLoad>
                            <p className="name">Sanju Shrestha</p>
                        </div>
                        <div className="pic-wrapper santosh-dhimal">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Santosh-Dhimal-199x300.jpg')} alt="Santosh Dhimal" className="pic" />
                            </LazyLoad>
                            <p className="name">Santosh Dhimal</p>
                        </div>
                        <div className="pic-wrapper sarita-rai">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Sarita Rai.JPG')} alt="Sarita Rai" className="pic" />
                            </LazyLoad>
                            <p className="name">Sarita Rai</p>
                        </div>
                        <div className="pic-wrapper sarita-subedi">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Sarita-Subedi-298x300.jpeg')} alt="Sarita Subedi" className="pic" />
                            </LazyLoad>
                            <p className="name">Sarita Subedi</p>
                        </div>
                        <div className="pic-wrapper shamuel-maharjan">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Shamuel-Maharjan-199x300.jpeg')} alt="Shamuel Maharjan" className="pic" />
                            </LazyLoad>
                            <p className="name">Shamuel Maharjan</p>
                        </div>
                        <div className="pic-wrapper shanti-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Shanti Tamang.JPG')} alt="Shanti Tamang" className="pic-shanti" />
                            </LazyLoad>
                            <p className="name">Shanti Tamang</p>
                        </div>
                        <div className="pic-wrapper sheetal-dura">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Sheetal-Dura-287x300.jpg')} alt="Sheetal Dura" className="pic" />
                            </LazyLoad>
                            <p className="name">Sheetal Dura</p>
                        </div>
                        <div className="pic-wrapper sujata-bista">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Sujata Bista .jpeg')} alt="Sujata Bista" className="pic" />
                            </LazyLoad>
                            <p className="name">Sujata Bista</p>
                        </div>
                        <div className="pic-wrapper sushma-thakuri">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Sushma Thakuri.jpeg')} alt="Sushma Thakuri" className="pic-sushma" />
                            </LazyLoad>
                            <p className="name">Sushma Thakuri</p>
                        </div>
                        <div className="pic-wrapper tara-chauhan">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Tara Chauhan.JPG')} alt="Tara Chauhan" className="pic" />
                            </LazyLoad>
                            <p className="name">Tara Chauhan</p>
                        </div>
                        <div className="pic-wrapper tsering-jordan-tamang">
                            <LazyLoad height={200} once>
                                <img src={require('../../img/Alumni-New/Tsering Jordan Tamang.JPG')} alt="Tsering Jordan Tamang" className="pic" />
                            </LazyLoad>
                            <p className="name">Tsering Jordan Tamang</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Two;
