import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About-Us/About'
// import Video from '../../vid/Homepage.mp4'

const Home = () => {
    return (
        <>
            <Navbar />
            <About />
            <div className="home">
                {/* Video Section */}
                {/* <div className="video-container">
                    <video className="video" controls>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}

                {/* Other content */}
                <div className="other-content">
                    {/* Add other content here */}
                </div>
            </div>
        </>
    )
}

export default Home