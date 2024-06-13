import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';
import { Helmet } from 'react-helmet';
import LoadingScreen from '../LoadingScreen/LoadingScreen'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust time in milliseconds (e.g., 3000 for 3 seconds)

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Navbar />
            <LoadingScreen isLoading={isLoading} />
            <div className={`courses-container ${isLoading ? 'hidden' : 'visible'}`}>
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
                                <option value="Caregiver">Caregiver</option>
                                <option value="Hotel & Lodge Assistant">Hotel & Lodge Assistant</option>
                                <option value="Co-operative Management Training">Co-operative Management Training</option>
                                <option value="Computer Hardware & Network Technician">Computer Hardware & Network Technician</option>
                                <option value="Others">Others</option>
                                {/* Add more options here */}
                            </select>
                        </label>
                        <label>
                            Organization's Name (Optional)
                            <input type="text" />
                        </label>
                        <label className="required">
                            Participant's Name
                            <input type="text" required />
                        </label>
                        <label className="required">
                            Date of Birth
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
                        <label className="required">
                            Qualification
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
                            <input type="email" />
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
                        <label>
                            How Many Years Have You Been in the Present Job (Optional)
                            <input type="text" />
                        </label>
                        <label>
                            Present Area of Responsibilities (Optional)
                            <textarea rows="4"></textarea>
                        </label>
                        <label className="required">
                            Payment of Program Fees
                            <div className='radio-group'>
                                <label>
                                    <input type="radio" name="payment" value="Online Transfer" required />
                                    Online Transfer
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="Cheque No." required />
                                    Cheque No.
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="Cash" required />
                                    Cash
                                </label>
                            </div>
                        </label>
                        <label>
                            Name of Sponsor (Optional)
                            <input type="text" />
                        </label>
                        <label>
                            Designation of Sponsor (Optional)
                            <input type="text" />
                        </label>
                        <label>
                            Signature of Sponsor (Optional)
                            <input type="file" />
                        </label>
                        <label>
                            Date (Optional)
                            <input type="date" />
                        </label>
                        <label>
                            Upload Legal Documents (Optional)
                            <input type="file" multiple />
                        </label>

                        <button type="submit">Submit</button>

                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;