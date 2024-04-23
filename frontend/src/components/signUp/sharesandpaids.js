import React from 'react'
import '../login/loginsignup.css';
import { Link } from 'react-router-dom';

const sharesandpaids = () => {
  return (
    <div className='bg-white'>
    <div className="container">
      <div className="row Id-row">
        <div className="col-md-5">
        <div className='bg-left-first'>
            <div className='banner-login'>
              <img src="https://digitxgroup.com/wp-content/uploads/2024/04/About.png" className="step-2" alt="" />
            </div>
          </div>
        </div>
  <div className="col-md-7">
    <div className="step_first_top step_second_top">
      <h3>Shares & paid-up capital</h3>
      <p>We've already set our recommended defaults for the paid-up capital and number of shares. Some banks require a minimum paid-up capital of $200, hence the recommended default (which is easily divideable equally among most shareholders). You may increase the paid-up capital and number of shares after opening of a bank account</p>
        <form>
        <div className='mb-3'>
                      <label htmlFor='firstName'>Paid-up capital</label>
                      <div className="d-flex align-items-center">
                      <input type="text" placeholder='Your preferred name'
                  className='form-control rounded-0 form-control bg-gray-100' value='USD 200' disabled/>
                     </div>
        </div>

        <div className='mb-3'>
                      <label htmlFor='firstName'>Number of shares</label>
                      <div className="d-flex align-items-center">
                      <input type="text" placeholder='Your preferred name'
                  className='form-control rounded-0 form-control bg-gray-100' value='2400' disabled/>
                     </div>
        </div>
        </form>
        <p>If this default does not work for you, discuss it with your account manager after submission of this form.</p>
        <button onClick={handleGetStarted} className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/businesscontactdetails'><strong>Understood, next step →</strong></Link></button>
    </div>
  </div>
</div>
</div>
</div> 
)
}
function handleGetStarted() {
  console.log("Get Started button clicked");
}


export default sharesandpaids;
