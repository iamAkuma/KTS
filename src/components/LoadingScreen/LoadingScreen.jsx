// LoadingScreen.js

import React from 'react';
import './LoadingScreen.css'; // Add CSS for styling the loading screen

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <img src={require('../../img/KTS-logo.png')} alt="Loading..." className="loading-image" />
        </div>
    );
};

export default LoadingScreen;
