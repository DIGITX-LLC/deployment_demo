import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons
import './loginsignup.css'; 

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null })); // Clear previous error when typing
    if (name === 'email' && value.trim() !== '') {
      validateEmail(value);
    } else if (name === 'password') {
      validatePassword(value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    setErrors((prev) => ({ ...prev, email: isValidEmail ? null : 'Invalid email address' }));
  };

  const validatePassword = (password) => {
    const uppercasePattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numericPattern = /\d/;
    
    let isValidPassword = true;
    let errorMessage = '';

    if (password.length < 8) {
      isValidPassword = false;
      errorMessage = 'Password must be at least 8 characters long';
    } else if (!uppercasePattern.test(password)) {
      isValidPassword = false;
      errorMessage = 'Password must contain at least one uppercase letter';
    } else if (!specialCharacterPattern.test(password)) {
      isValidPassword = false;
      errorMessage = 'Password must contain at least one special character';
    } else if (!numericPattern.test(password)) {
      isValidPassword = false;
      errorMessage = 'Password must contain at least one numeric digit';
    }

    setIsValid(isValidPassword);
    setErrors((prev) => ({ ...prev, password: isValidPassword ? null : errorMessage }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Proceed with login logic here
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
<div className='bg'>
<div class="container ">
  <div class="row Id-row">
    <div class="col-md-7">
             <div className='bg-left'>
              <div className='banner-login login-left'>
              <img src="" className="banner"alt="" />
              </div>
              <div className='login_text'>
                <p><strong>Update</strong> April 14 2024</p>
              <h1 className='login_h1'>Manage multiple companies</h1>
              <p>It's now possible to start a new company from your existing account and manage multiple companies through our dashboard.</p>
              </div>
             </div>
        </div>
    <div class="col-md-5">
    <div className=' justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded w-100'>
        <h2 className="login">Welcome  👋</h2>
        <p>Let's get some business done!</p>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='email'
              value={values.email}
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>
            
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <div className="input-group">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder='Enter Your Password'
                name='password'
                value={values.password}
                onChange={handleInput}
                className='form-control rounded-0'
              />
              <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          <div className="mb-3">
            <Link to='/forgot-password' className='text-decoration-none'>Forgot Password?</Link>
          </div>
          <button type='submit' className={`btn btn-primary w-100 rounded-0 ${isValid ? '' : 'disabled'}`} disabled={!isValid}><strong>Log in</strong></button>
          <p className="text-center mt-3">New Here? <Link to="./signup">Create Account</Link></p>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}

export default Login;
