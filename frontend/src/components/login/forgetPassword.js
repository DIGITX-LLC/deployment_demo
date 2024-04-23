import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailFilled, setIsEmailFilled] = useState(false); // Track whether the email field is filled

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailFilled(value.trim() !== ''); // Check if the email field is filled
    setErrorMessage(''); // Clear any previous error message
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the email is valid
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Here you can implement the logic to send a password reset email to the provided email address
    // For simplicity, let's assume we display a success message
    setSuccessMessage('Password reset email has been sent. You will get an email only if you have account with us.');
    // Clear the email field
    setEmail('');
    setIsEmailFilled(false); // Reset the email filled state
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className='bg-white'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-5">
            <div className='bg-left-first forgot_password'>
                <div className='banner-login'>
                  <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Incorplink-GO-GLOBAL-Incorporate-WITH-IncorPLINK.-1.png" className="step-2" alt="" />
                </div>
              </div>
            </div>
    <div className="col-md-7">
    <div className='d-flex justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded w-100 signup_margin forget_margin'>
        <h2 className="forgot_text">Forgot password? 😵</h2>
        <p>No worries, it happens to the best of us! Simply request a password reset link by entering your email address below.</p>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={handleEmailChange} 
              className='form-control rounded-0'
            />
            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
          </div>
          <button type='submit' className={` forgot_button  w-100  ${!isEmailFilled ? 'disabled' : ''}`} disabled={!isEmailFilled}>Send me reset password instructions</button>
          {successMessage && <div className='text-success'>{successMessage}</div>}
          <p className="text-center mt-3">Suddenly remembered?  <Link to= '/'>Sign In</Link></p>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
