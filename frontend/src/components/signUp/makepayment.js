import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

const MakePayment = () => {
  // State to track whether the tab content is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-white'>
      <div className="container">
        <div className="row Id-row">
          <div className="col-md-4">
            <div className='bg-left-select'>
              <div className='banner-login'>
                <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Make-Payment-for-your.png" className="step-2" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="getstarted_face makepayment_top">
              <h5 className='get_started_text'>Make payment for your incorporation</h5>
              <p>Use the checkout form below to complete payment using your debit or credit card.</p>
              <div className='tab_border'>
              <div className='dropdown tab_con'>
                {/* Clickable Tab */}
                <div className="tab" onClick={toggleExpansion}><strong>SSM Incorporation Fee USA</strong></div>
                {/* Additional Text Content, conditionally rendered based on the expansion state */}
                {isExpanded && (
                  <div className="additional-text">
                    This is the fee we pay on your behalf to the government of USA  for the
                    purpose of incorporating your USA..
                  </div>
                )}
              </div>

              <div className='dropdown tab_con'>
                {/* Clickable Tab */}
                <div className="tab" onClick={toggleExpansion}><strong>Incorporation Service</strong></div>
                {/* Additional Text Content, conditionally rendered based on the expansion state */}
                {isExpanded && (
                  <div className="additional-text">
                    This is the all-inclusive fee for the incorporation of your Sdn Bhd. This fee
                    includes our service fee, costs for KYC & bankruptcy checks, opening bank
                    accounts and everything else needed for starting your business.
                  </div>
                )}
              </div>

              <div className='dropdown tab_con'>
                {/* Clickable Tab */}
                <div className="tab" onClick={toggleExpansion}><strong>Corporate Secretary</strong></div>
                {/* Additional Text Content, conditionally rendered based on the expansion state */}
                {isExpanded && (
                  <div className="additional-text">
                    In accordance with the Companies Act of 2016 it is required to appoint a
company secretary, have a registered office, file annual returns and more.
This fee includes everything that you require in the ordinary course of
business. Including access to our platform.
                  </div>
                )}
              </div>
              </div>

              <button className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'>
                <Link to='http://localhost:3000/dashboards'><strong>Next Step →</strong></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
