import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>
                    Blogs - Kathmandu Technical School
                </title>
            </Helmet>
            <div>
                <h1 className='text-center'>KTS Blogs</h1>
            </div>
            <Footer />
        </>
    )
}

export default Blogs