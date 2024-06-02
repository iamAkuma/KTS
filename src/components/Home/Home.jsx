import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About-Us/About'
import Video from '../Video/Video'
import WhyChoose from '../whyChoose/whyChoose'
import Quote from '../Quote/Quote'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Navbar />
            <Video />
            <About />
            <WhyChoose />
            <Quote />
            <Footer />
        </>
    )
}

export default Home