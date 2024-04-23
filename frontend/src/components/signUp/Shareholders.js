import React from 'react'
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

function ShareHolders() {

    return (
        <div className='bg-white'>
            <div className="container">
                <div className="row Id-row">
                    <div className="col-md-5">
                        <div className='bg-left-first'>
                            <div className='banner-login'>
                                <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Shareholders.png" className="step-2" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="step_first_top">
                            <h3>Shareholders</h3>
                            <p>These are the owners of the company, represented through shares.</p>
                            <h5 className='youhaveshare'>You have <strong>2400</strong> / 2400 shares left to distribute</h5>
                            <button  className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/submittedsuccessfull'><strong>Next Step →</strong></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareHolders;
