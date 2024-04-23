import React from 'react'
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

const selectplan = () => {
  return (
    <div className='bg-white'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-4">
            <div className='bg-left-select'>
                <div className='banner-login'>
                  <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Incorporation-Company.png" className="step-2" alt="" />
                </div>
              </div>
            </div>
    <div className="col-md-8">
       <div className="selectplan">
      <h3 className='get_started_text'>Incorporation & Company Secreterial Services</h3>
      <p>We have one simple price for incorporation, so you just need to select the right secreterial package for your needs. All prices are what you see is what you pay. No surprises.</p>
       <div className='one-time-free'>
        <h4>Incorporation of USA  🚀</h4>
        <p>Everything you need to get incorporated. Includes the $1010 SSM fee.</p>
        <div className='rm1500'>
        <h3>$ 1599</h3>
        <p>One-time fee</p>
        </div>
       </div>
      <button className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/makepayment'><strong>Next Step →</strong></Link></button>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default selectplan;
