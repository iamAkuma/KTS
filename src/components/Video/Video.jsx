import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Video from '../../vid/Homepage.mp4';
import './Video.css';

const Videos = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleMuteUnmute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <div className="video-container">
            <video
                className="video"
                ref={videoRef}
                autoPlay
                muted
                loop
                onClick={handlePlayPause}
            >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="controls">
                <button className="button" onClick={handlePlayPause}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button className="button" onClick={handleMuteUnmute}>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                </button>
            </div>
        </div>
    );
}

export default Videos;
