import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About-Us/About'
import Video from '../Video/Video'
import WhyChoose from '../whyChoose/whyChoose'
import Quote from '../Quote/Quote'
const Home = () => {
    return (
        <>
            <Navbar />
            <Video />
            <About />
            <WhyChoose />
            <Quote />
        </>
    )
}

export default Home