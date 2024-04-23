import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'; // Import react-select
import '../login/loginsignup.css';

function BusinessContactDetails() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState(null); // State for country code dropdown
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // Sample country code options
    const countryCodes = [
        { value: '+1', label: '🇺🇸 +1', placeholder: '123-456-7890', flag: '🇺🇸' },
        { value: '+88', label: '🇧🇩 +880', placeholder: '1234-567890', flag: '🇧🇩' }, // Added placeholders for BGD and US
        // Add more country options as needed
    ];

    const handlePhoneChange = (selectedOption) => {
        // When a country code is selected from the dropdown, update the phone state accordingly
        setCountryCode(selectedOption);
        setPhone(''); // Clear phone number when country code changes abscdgyryegfyfgyfgrfgr
    };

    const validateEmail = () => {
        if (!email) {
            setEmailError('Email address is required');
        } else {
            setEmailError('');
        }
    };

    const validatePhone = () => {
        if (!phone) {
            setPhoneError('Phone number is required');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePhone();

        // Additional validation logic can be added here

        // If all fields are valid, proceed with form submission
        if (email && phone) {
            // Perform form submission
            console.log('Form submitted successfully');
        } else {
            console.log('Form submission failed. Please check for errors.');
        }
    };

    return (
        <div className='bg-white'>
            <div className="container">
                <div className="row Id-row">
                    <div className="col-md-5">
                        <div className='bg-left-first'>
                            <div className='banner-login'>
                                <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Business-Contact.png" className="step-2" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="step_first_top step_second_top">
                            <h3>Business contact details</h3>
                            <p>These contact details will be registered with SSM and will be publicly available as general contact information for your company.</p>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='email'>Company email address</label><br />
                                    <input type="email" placeholder='Your company email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} className='form-control rounded-0' />
                                    {emailError && <div className="text-danger">{emailError}</div>}
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='phone'>Phone</label>
                                    <div className="d-flex align-items-center">
                                        <Select
                                            value={countryCode}
                                            onChange={handlePhoneChange}
                                            options={countryCodes}
                                            className="mr-2"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    width: '130px',
                                                }),
                                            }}
                                        />
                                        <input type="text" placeholder={countryCode ? `${countryCode.placeholder}` : 'Enter Your Phone Number'} value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} className='form-control rounded-0' />
                                    </div>
                                    {phoneError && <div className="text-danger">{phoneError}</div>}
                                </div>

                                <h3>Business (office) address</h3>
                                <p><strong>No office yet?</strong><br />
                                    No worries, you may enter your own residential address as a temporary office address. You can change this free of charge after incorporation.</p>
                                <div className='mb-3'>
                                    <label htmlFor='firstName'>Address Line 1</label>
                                    <div className="d-flex align-items-center">
                                        <input type="text" placeholder='32 Some Street'
                                            className='form-control rounded-0' />
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='firstName'>Address Line 2</label>
                                    <div className="d-flex align-items-center">
                                        <input type="text" placeholder=''
                                            className='form-control rounded-0' />
                                    </div>
                                </div>

                                <button className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1' type="submit"><Link to='http://localhost:3000/signup/whowillbethedirectors'><strong>next step →</strong></Link></button>
                                <button className='btn  rounded-0 text-decoration-none getstarted1'><Link to='#'><strong>← Go back</strong></Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessContactDetails;
