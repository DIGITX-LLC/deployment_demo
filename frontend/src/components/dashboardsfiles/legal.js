import React from 'react'
import '../login/loginsignup.css';

const legal = () => {
  return (
<div className='invoices'>
    <div className="container">
    <div className='invoices_bg'>
      <div className="row Id-row">
      <div className="col-md-4">
         <div className='invoices_left'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/legal_templates4-351cba3174b09f53def37cf08b6b0e20e8c6fe4adb6abccfd72eb444546d1a45.png" className="invoices_img" alt="" />
         </div>
        </div>
    <div className="col-md-8">
        <div className='invoices_right legal_right'>
          <strong>Package</strong>
          <h5>Legal templates for new companies</h5>
          <p>We've carefully drafted 6 legal templates that are essential for new companies. Get started with the right protection for a fraction of the usual cost.</p>
          <h6>Included in this package:</h6>
          <ul>
            <li>Shareholders Agreement</li>
            <li>Employment Contract</li>
            <li>Employment offer letter</li>
            <li>Contractors Agreement</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
          </ul>
          <p>Each agreement comes in .word format with comments & highlights and a guide on how to use the agreement.</p>
        </div>
    </div>
    </div>
    </div>
    <p className='bottom_text_invoces'>Looking for legal services? WhatsApp us to get connected</p>
    </div>
    </div>
  )
}

export default legal
