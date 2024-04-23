import React, { useState } from 'react';

const UpdatePassword = ({ activeButton, handleButtonClick }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to update the password
    if (password === confirmPassword) {
      // Passwords match, proceed with updating password
      console.log('Password updated successfully');
      // You can make an API call here to update the password
    } else {
      // Passwords don't match, show error or take appropriate action
      console.log('Passwords do not match');
    }
  };

  return (
    <div className='profile'>
      <div className="container">
        <div className='profile_bg'>
          <div className="row Id-row">
            <div className="col-md-4">
              <div className='profile_button'>
                <a 
                  className={`profilebtn ${activeButton === 'profile' ? 'active' : ''}`} 
                  href="/profile"
                  onClick={(e) => handleButtonClick(e, 'profile')}
                >
                  Profile
                </a> <br />
                <a 
                  className={`profilebtn ${activeButton === 'password' ? 'active' : ''}`} 
                  href="/updatepassword"
                  onClick={(e) => handleButtonClick(e, 'password')}
                >
                  Password
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className='update_password'>
                <form onSubmit={handleSubmit}>
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <label>Confirm New Password:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <button type="submit">Update Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
