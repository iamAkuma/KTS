import React from 'react';
import ReactPlayer from 'react-player'; // Import ReactPlayer
import './Logo.css'; // Import the CSS file

const LogoAnimation = () => {
    const videoUrl = require('../../vid/LOGO-ANIMATION.mp4'); // Assuming video is in the same folder

    return (
        <div className="logo-animation-container">
            <ReactPlayer
                url={videoUrl}
                playing={true} // Set playing to true for autoplay
                loop={true} // Set loop to true for continuous playback
                muted={true} // Set muted to true for silent playback
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default LogoAnimation;
