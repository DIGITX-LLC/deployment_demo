import React from 'react'
import '../login/loginsignup.css';

const registercompany = () => {
  return (
    <div className='register_companies'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-6">
        <div className='secregister_bg'>
         <div className='register_text'>
            <h4>Register new company</h4>
            <p>Start the registration of a new USA</p>
            <a className='companybutton' href="/signup/intro">Register new company</a>
         </div>
         </div>
        </div>
    <div className="col-md-6">
    <div className='secregister_bg'>
    <div className='register_text'>
            <h4>Switch-in company</h4>
            <p>Switch to incorplink for company secretary services</p>
            <a className='companybutton coming_reg' href="/">Coming Soon</a>
         </div>
    </div>
    </div>
    <a className='go_back_acc' href="/yourcompanies">   ← GO BACK TO ACCOUNTS</a>
    </div>
    </div>
    </div>
  )
}

export default registercompany
