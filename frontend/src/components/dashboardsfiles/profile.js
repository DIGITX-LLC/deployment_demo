import React, { useState } from 'react';
import '../login/loginsignup.css';

const Profile = () => {
    const [activeButton, setActiveButton] = useState('profile'); // Set initial active button to 'profile'

    const handleButtonClick = (event, buttonName) => {
      event.preventDefault();
      setActiveButton(buttonName);
    };
  
  return (
    <div className='profile'>
      <div className="container">
        <div className='profile_bg'>
          <div className="row Id-row">
            <div className="col-md-3">
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
            <div className="col-md-6">
              <div className='edit_profile'>
                <h4>Edit Profile</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn_up btn-primary">Update Profile</button>
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <div className='choose_image'>
                <h4>Choose Image</h4>
                <input type="file" accept="image/*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
