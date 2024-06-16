import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Alumni.css';

const Alumni = () => {
    return (
        <>
            <Navbar />
            <div className='alumni-section'>
                <h1 className='alumni-header'>ALUMNI</h1>
                <div className='year-section'>
                    <ul>
                        <Link className='seventy' to="/2079-80">
                            <li>2079/80</li>
                        </Link>
                        <Link className='eighty' to="/2080-81">
                            <li>2080/81</li>
                        </Link>
                        {/* Add more years as needed */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Alumni;
