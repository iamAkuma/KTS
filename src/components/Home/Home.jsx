import React from 'react'
import Navbar from '../Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                {/* Video Section */}
                <div className="video-container">
                    <video className="video" controls>
                        <source src="path/to/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Other content */}
                <div className="other-content">
                    {/* Add other content here */}
                </div>
            </div>
        </>
    )
}

export default Home