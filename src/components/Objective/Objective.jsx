import React from 'react';
import './Objective.css'; // Import custom CSS

const Objective = () => {
    return (
        <div className="container">
            <img src={require('../../img/garden.jpeg')} alt="Garden" className="image-container" />
            <div className="text-container">
                <div className="text-left">
                    <h1>This is your Title Text (Left)</h1>
                    <p>Text content for the left side.</p>
                </div>
                <div className="text-right">
                    <h1>This is your Title Text (Right)</h1>
                    <p>Text content for the right side.</p>
                </div>
            </div>
        </div>
    );
};

export default Objective;
