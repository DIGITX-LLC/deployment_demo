import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

const AboutBusiness = () => {
    const [businessDescription, setBusinessDescription] = useState('');
    const [businessDescriptionError, setBusinessDescriptionError] = useState('');

    const handleGetStarted = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Validate form fields
        if (validateForm()) {
            console.log("Form submitted successfully!");
            // Proceed with navigation or form submission
        } else {
            console.log("Form validation failed!");
            // Handle validation errors
        }
    };

    const validateForm = () => {
        let isValid = true;

        // Validate Business Description
        if (businessDescription.trim() === '') {
            setBusinessDescriptionError('Business description is required');
            isValid = false;
        } else {
            setBusinessDescriptionError('');
        }

        return isValid;
    };

    return (
        <div className='bg-white'>
            <div className="container">
                <div className="row Id-row">
                    <div className="col-md-5">
                        <div className='bg-left-first'>
                            <div className='banner-login'>
                                <img src="https://digitxgroup.com/wp-content/uploads/2024/04/About.png" className="step-2" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="step_first_top step_second_top">
                            <h3>About your business</h3>
                            <p>Tell us what your company will be doing and select the correct nature of business (MSIC Codes)</p>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='firstName'>What will your company do?</label>
                                    <textarea name="comments" id="comments" className='form-control rounded-0' placeholder='Please concisely explain what your business will be doing in 2 to 3 sentences Maximum...' value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)}></textarea>
                                    {businessDescriptionError && <div className="text-danger">{businessDescriptionError}</div>}
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="pet-select">Select your MSIC codes</label> <br />
                                    <select name="pets" id="pet-select">
                                        <option value="">Select MSIC codes</option>
                                        <option value="dog">Codes</option>
                                        <option value="cat">Codes</option>
                                        <option value="hamster">Codes</option>
                                        <option value="parrot">Codes</option>
                                        <option value="spider">Codes</option>
                                        <option value="goldfish">Codes</option>
                                    </select>
                                </div>
                            </form>
                            <button onClick={handleGetStarted} className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/sharesandpaids'><strong>Next Step →</strong></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBusiness;
