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
import Cards from '../Cards/Cards'
// import Contact from '../Contact-Us/Contact-Us'

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
            <Cards />
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default Home