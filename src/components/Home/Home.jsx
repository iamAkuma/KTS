import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About-Us/About'
import Video from '../Video/Video'
import WhyChoose from '../whyChoose/whyChoose'
import Quote from '../Quote/Quote'
import Footer from '../Footer/Footer'
import Speciality from '../Speciality/Speciality'
import Logo from '../Logo-Vid/Logo'
import Objective from '../Objective/Objective'
import Empower from '../Empower/Empower'


const Home = () => {
    return (
        <>
            <Navbar />
            <Video />
            <About />
            <WhyChoose />
            <Quote />
            <Speciality />
            <Logo />
            <Objective />
            <Empower />
            <Footer />
        </>
    )
}

export default Home