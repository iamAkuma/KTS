import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';


const Courses = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>
                    Courses - Kathmandu Technical School
                </title>
            </Helmet>
            <div>
                <h1 className='text-center'>Courses</h1>
            </div>
            <Footer />
        </>

    )
}

export default Courses