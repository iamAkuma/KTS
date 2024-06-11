import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Contact - Kathmandu Technical School</title>
            </Helmet>
            <div className='register'>
                <h1 className='text-header'>Register Here</h1>
                <form className='register-form'>
                    <label>
                        Name of the Program (Optional)
                        <select>
                            <option value="">Select One</option>
                            <option value="">Caregiver</option>
                            <option value="">Hotel & Lodge Assistant</option>
                            <option value="">Co-operative Management Training</option>
                            <option value="">Computer Hardware & Network Technician</option>
                            <option value="">Others</option>
                            {/* Add more options here */}
                        </select>
                    </label>
                    <label>
                        Organization's Name (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Participant's Name *
                        <input type="text" required />
                    </label>
                    <label>
                        Date of Birth *
                        <input type="date" required />
                    </label>
                    <label>
                        P.P. Size Photograph (Optional)
                        <input type="file" />
                    </label>
                    <label>
                        Designation (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Qualification *
                        <input type="text" required />
                    </label>
                    <label>
                        Correspondence Address (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Telephone Number (Office) (Optional)
                        <input type="tel" />
                    </label>
                    <label>
                        Telephone Number (Residence) (Optional)
                        <input type="tel" />
                    </label>
                    <label>
                        Email Address (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Organizational Activities (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Nature of Organization (Optional)
                        <div className='radio-group'>
                            <label>
                                <input type="radio" name="nature" value="Public" />
                                Public
                            </label>
                            <label>
                                <input type="radio" name="nature" value="Private" />
                                Private
                            </label>
                            <label>
                                <input type="radio" name="nature" value="NGO/INGO" />
                                NGO/INGO
                            </label>
                            <label>
                                <input type="radio" name="nature" value="Other" />
                                Other
                            </label>
                        </div>
                    </label>
                    <button type="submit">Submit</button>

                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;