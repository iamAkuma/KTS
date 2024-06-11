import React from 'react'
import { Helmet } from 'react-helmet'
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
import ContactForm from '../ContactForm/ContactForm'
import Scroll from '../Scroll/Scroll'

const Home = () => {
    return (
        <>
            <Helmet><title>Kathmandu Technical School – A Journey to Excellence.</title></Helmet>
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
            <Scroll />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home