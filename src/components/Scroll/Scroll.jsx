import React from 'react';
import './Scroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const events = [
    { title: 'Holistic Approach', description: 'We take a comprehensive approach to teaching where our educators address the emotional, social, ethical, and academic needs of students in an enabling learning environment.' },
    { title: 'Result Oriented', description: 'We provide relevant training which is contextualized and purposely tailored to the learner or community’s needs and goals. Our courses ensure skills, competency, and employability.' },
    { title: 'Inclusivity', description: 'We provide real learning opportunities for groups who have traditionally been excluded. KTS provides an environment where all students feel an extended sense of belonging.' },
    { title: 'Employer Engaged', description: 'We actively involve potential employers who mentor and directly engage our students through hands-on activities and mentorship in real work environments.' },
    { title: 'Market Oriented', description: 'Our courses are based on and driven by real-time and future market needs. Every season we introduce courses that are market-, jobs-, and industry-oriented.' }

];

const Scroll = () => {
    return (
        <div className="scrolling">
            <h1 className='app'>OUR APPROACH</h1>
            <h5 className='skill'>Skill is the new Currency</h5>
            <br />

            <div className="timeline">

                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                        <div className="timeline-content">
                            <h4>{event.title}</h4>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scroll;