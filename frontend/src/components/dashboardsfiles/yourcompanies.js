import React from 'react'
import '../login/loginsignup.css';

const yourcompanies = () => {
  return (
    <div className='companies'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-6">
         <div className='companies_text'>
            <h4>Your companies</h4>
            <p>You Have 0 comapnies now</p>
         </div>
        </div>
    <div className="col-md-6">
        <div className='company_button_sec'>
            <a className='companybutton' href="/register">Register new company</a>
          
          
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default yourcompanies
