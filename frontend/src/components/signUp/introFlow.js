import React from 'react';
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

function IntroFlow() {
  return (
    <div className='bg-white'>
      <div className="container">
        <div className="row Id-row">
        <div className="col-md-5">
              <div className='bg-left-first'>
                  <div className='banner-login'>
                    <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Get-Started.png" className="step-2" alt="" />
                  </div>
                </div>
              </div>
      <div className="col-md-7">
         <div className="getstarted_face">
        <h3 className='get_started_text'>Get Started with onboarding</h3>
        <p>This is the start of a new journey and we couldn't be more excited to help you with starting your company. Begin the simple 4 step process here</p>
        <div className="step-container">
          <div className="step-group">
            <div className="step">
              <div className="step-badge">1</div>
              <p className="step-text">Submit Incorporation Details and Select Plan</p>
            </div>
            <div className="flow-arrow"></div> {/* Arrow from step 1 to step 2 */}
            <div className="step">
              <div className="step-badge">2</div> 
              <p className="step-text">Verify Identity of All Directors / Shareholders</p>
            </div>
            <div className="flow-arrow"></div>
          <div className="step-group">
            <div className="step">
              <div className="step-badge">3</div>
              <p className="step-text">Signing of Pre-Incorporation Documents</p>
            </div>
            <div className="flow-arrow"></div> {/* Arrow from step 2 to step 3 */}
            <div className="step">
              <div className="step-badge">4</div>
              <p className="step-text">Submission to Department of State</p>
            </div>
            </div>
          </div>
        </div>
        <p className='intro_p'><strong>Useful to know</strong>,<br />Your Data is saved after every step, you may come back at any time to complete the onboarding procces. After submisson out team will get in touch with you.</p>
        <button onClick={handleGetStarted} className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/nameyourcompany'><strong>Get Started</strong></Link></button>
      </div>
      </div>
      </div>
      </div>
      </div>
   
  );
}

function handleGetStarted() {
  console.log("Get Started button clicked");
}

export default IntroFlow;
