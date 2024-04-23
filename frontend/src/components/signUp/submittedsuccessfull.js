import React from 'react'
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

const submittedsuccessfull = () => {
  return (
    <div className='bg-white'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-5">
            <div className='bg-left-first'>
                <div className='banner-login'>
                  <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Submitted.png" className="step-2" alt="" />
                </div>
              </div>
            </div>
    <div className="col-md-7">
       <div className="getstarted_face">
      <h3 className='get_started_text'>Submitted successfully  🎉</h3>
      <p>You're one step closer to have <strong className='incorp'>incorplink</strong> incorporated!</p>
      <p><strong>So, what's next?</strong></p>
       <div className='payment'>
        <strong>💵  Payment for Incorporation</strong>
        <p>Before we can proceed with the incorporation process, we require payment to be made.</p>
       </div>
       <div className='payment'>
        <strong>🕵️‍♂️  Identity Verification & signing</strong>
        <p>Emails & Text messages will be send to all directors & shareholders to complete the identity verification process and sign the final documents.</p>
       </div>
       <div className='payment'>
        <strong>🏢  SSM Submission (By Foundingbird)</strong>
        <p>Time to relax and sit back, while we work with SSM to get your company incorporated!</p>
       </div>
      <button className='btn btn-success border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/selectplan'><strong>💳   Go to payment page</strong></Link></button>
      <button className='btn submit_dashboard w-100 rounded-0 text-decoration-none getstarted1'><Link to='#'><strong>Go to Dashboard</strong></Link></button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default submittedsuccessfull;
