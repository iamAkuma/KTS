import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import './Logo.css';

const LogoAnimation = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [inView]);

    const videoUrl = require('../../vid/LOGO-ANIMATION.mp4');

    return (
        <div ref={ref} className="logo-animation-container">
            <ReactPlayer
                url={videoUrl}
                playing={isPlaying}
                loop
                muted
                width="100%"
                height="100%"
                className="logo-animation-video"
            />
        </div>
    );
};

export default LogoAnimation;
