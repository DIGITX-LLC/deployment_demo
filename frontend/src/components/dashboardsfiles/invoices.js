import React from 'react'
import '../login/loginsignup.css';

const invoices = () => {
  return (
    <div className='invoices'>
    <div className="container">
    <div className='invoices_bg'>
      <div className="row Id-row">
      <div className="col-md-4">
         <div className='invoices_left'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/invocing.png" className="invoices_img" alt="" />
         </div>
        </div>
    <div className="col-md-8">
        <div className='invoices_right'>
          <strong>Coming soon</strong>
          <h5>Create, send & keep track of invoices</h5>
          <p>Landed your first customer? Congratulations! It's time to collect that payment. Generate an invoice and send it to your customer. Income & expenses can be tracked right in Foundingbird.</p>

        </div>
    </div>
    </div>
    </div>
    <p className='bottom_text_invoces'>Looking for accounting services?</p>
    </div>
    </div>
  )
}

export default invoices;
