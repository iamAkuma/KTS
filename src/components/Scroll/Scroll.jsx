import React from 'react';
import './Scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const events = [
    { title: 'Event 1', description: 'Description for event 1', date: '2024-01-01' },
    { title: 'Event 2', description: 'Description for event 2', date: '2024-02-01' },
    { title: 'Event 3', description: 'Description for event 3', date: '2024-03-01' },
    // Add more events as needed
];

const Scroll = () => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="timeline-content">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                        <span className="date">{event.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Scroll;
