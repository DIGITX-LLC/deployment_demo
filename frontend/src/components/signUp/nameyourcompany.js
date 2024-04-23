import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

function NameYourCompany() {
    const [companyName, setCompanyName] = useState('');
    const [explanation, setExplanation] = useState('');
    const [companyNameError, setCompanyNameError] = useState('');
    const [explanationError, setExplanationError] = useState('');

    const handleGetStarted = () => {
        // Validate fields before proceeding
        const isValid = validateFields();
        if (isValid) {
            console.log("Get Started button clicked");
            // Proceed with navigation or any other action
        } else {
            console.log("Form validation failed");
        }
    };

    const validateFields = () => {
        let isValid = true;

        if (!companyName.trim()) {
            setCompanyNameError('Company name is required');
            isValid = false;
        } else {
            setCompanyNameError('');
        }

        if (!explanation.trim()) {
            setExplanationError('Explanation is required');
            isValid = false;
        } else {
            setExplanationError('');
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
                                <img src="https://digitxgroup.com/wp-content/uploads/2024/04/1-1.png" className="step-2" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="step_first_top">
                            <h3>Name Your Company</h3>
                            <p><strong>Instructions for naming your company</strong><br />Please provide us with a name and a clear explanation of the meaning of the name. It is important you explain abbreviations or non-USA non-English words.</p>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='firstName'><strong>Company Name</strong></label>
                                    <div className="d-flex align-items-center">
                                        <input type="text" placeholder='Your preferred name'
                                            className='form-control rounded-0' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                        <span className='usa_step1'>USA</span>
                                    </div>
                                    {companyNameError && <div className="text-danger">{companyNameError}</div>}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='firstName'><strong>Explanation of name</strong></label>
                                    <textarea name="comments" id="comments" className='form-control rounded-0' placeholder='Please explain the name' value={explanation} onChange={(e) => setExplanation(e.target.value)}></textarea>
                                    {explanationError && <div className="text-danger">{explanationError}</div>}
                                </div>
                            </form>
                            <button onClick={handleGetStarted} className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/aboutbusiness'><strong>Next Step →</strong></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameYourCompany;
