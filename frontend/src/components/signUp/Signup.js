import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'; // Import react-select
import '../login/loginsignup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(null); // State for country code dropdown
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Sample country code options
  const countryCodes = [
    { value: '+1', label: '🇺🇸 +1', placeholder: '123-456-7890', flag: '🇺🇸' },
    { value: '+88', label: '🇧🇩 +880', placeholder: '1234-567890', flag: '🇧🇩' }, // Added placeholders for BGD and US
    // Add more country options as needed
  ];

  const handleFirstNameChange = (event) => {
    const firstNameValue = event.target.value;
    setFirstName(firstNameValue);
    validateName(firstNameValue, 'firstName');
  };

  const handleLastNameChange = (event) => {
    const lastNameValue = event.target.value;
    setLastName(lastNameValue);
    validateName(lastNameValue, 'lastName');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validateConfirmPassword(event.target.value);
  };

  const handlePhoneChange = (selectedOption) => {
    // When a country code is selected from the dropdown, update the phone state accordingly
    setCountryCode(selectedOption);
    setPhone(''); // Clear phone number when country code changes
  };

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const validateName = (name, fieldName) => {
    const namePattern = /^[a-zA-Z]+$/;
    const isValidName = namePattern.test(name);
    setErrors((prev) => ({ ...prev, [fieldName]: isValidName ? null : 'Only letters are allowed' }));
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
  
    setErrors((prev) => ({ ...prev, password: isValidPassword ? null : errorMessage }));
  };

  const validateConfirmPassword = (confirmPassword) => {
    const isValidConfirmPassword = confirmPassword === password;
    setErrors((prev) => ({ ...prev, confirmPassword: isValidConfirmPassword ? null : 'Passwords do not match' }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const isSignUpButtonDisabled = !firstName || !lastName || !email || !password || !confirmPassword || !phone || !countryCode || !termsAccepted ||
    Object.values(errors).some(error => error !== null);

  const handleSignUp = () => {
    console.log('Sign up button clicked');
  };

  return (
    <div className='bg'>
      <div className="container">
        <div className="row Id-row">
          <div className="col-md-6">
          <div className='bg-left'>
            <div className='bg-left-second banner-login login-left '>
           
              <div className='login_text'>
                <h1 className='login_h1'>Start your company with us</h1>
                <p>Incorplink is the all-in-one company operating system to manage your governance, finances and more.</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6">
            <div className='d-flex justify-content-center align-items-center'>
              <div className='bg-white p-3 rounded signup_form w-100 '>
                <h2 className="login">Create an account  👨‍💻</h2>
                <p className="">We will get started by making an account to enter & access your company information </p>
                <form>
                  <div className='mb-3'>
                    <label htmlFor='firstName'><strong>First Name</strong></label>
                    <input type="text" placeholder='Enter Your First Name' value={firstName} onChange={handleFirstNameChange} 
                className='form-control rounded-0'/>
                    {errors.firstName && <span className='text-danger'> {errors.firstName}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='lastName'><strong>Last Name</strong></label>
                    <input type="text" placeholder='Enter Your Last Name' value={lastName} onChange={handleLastNameChange} className='form-control rounded-0'/>
                    {errors.lastName && <span className='text-danger'> {errors.lastName}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Your Email' value={email} onChange={handleEmailChange} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='phone'><strong>Phone</strong></label>
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
                      <input type="text" placeholder={countryCode ? `${countryCode.placeholder}` : 'Enter Your Phone Number'} value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control rounded-0'/>
                    </div>
                    {errors.phone && <span className='text-danger'> {errors.phone}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <div className="input-group">
                      <input type={isPasswordVisible ? "text" : "password"} placeholder='Enter Your Password' value={password} onChange={handlePasswordChange} className='form-control rounded-0'/>
                      <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                      </button>
                    </div>
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                    <div className="text-muted" style={{ fontSize: '12px' }}>(Minimum 8 characters with one uppercase, one number, and one special character. Example: P@ss1234)</div> {/* Text indicating password requirements */}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='confirmPassword'><strong>Confirm Password</strong></label>
                    <div className="input-group">
                      <input type={isConfirmPasswordVisible ? "text" : "password"} placeholder='Confirm Your Password' value={confirmPassword} onChange={handleConfirmPasswordChange} className='form-control rounded-0'/>
                      <button type="button" className="btn btn-outline-secondary" onClick={toggleConfirmPasswordVisibility}>
                        <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEyeSlash : faEye} />
                      </button>
                    </div>
                    {errors.confirmPassword && <span className='text-danger'> {errors.confirmPassword}</span>}
                  </div>

                  <div className="mb-3">
                    <input type="checkbox" id="terms" checked={termsAccepted} onChange={handleTermsChange} />
                    <label htmlFor="terms" style={{ marginLeft: '10px' }}>I agree to the terms and policies</label>
                  </div>

                  <button className={`btn btn-primary w-100 rounded-0 ${isSignUpButtonDisabled ? 'disabled' : ''}`} disabled={isSignUpButtonDisabled} onClick={handleSignUp}><strong>Sign up</strong></button>
                </form>
                <p className="text-center mt-3"><strong>Already have an account? <Link to="http://localhost:3000/">Sign In</Link></strong></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
