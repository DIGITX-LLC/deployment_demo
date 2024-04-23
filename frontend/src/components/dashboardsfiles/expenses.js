import React from 'react'
import '../login/loginsignup.css';

const expenses = () => {
  return (
    <div className='invoices'>
    <div className="container">
    <div className='invoices_bg'>
      <div className="row Id-row">
      <div className="col-md-4">
         <div className='invoices_left'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/expense.png" className="invoices_img" alt="" />
         </div>
        </div>
    <div className="col-md-8">
        <div className='invoices_right'>
          <strong>Coming soon</strong>
          <h5>Keep track of your companies expenses</h5>
          <p>Need a place to keep track of your expenses? Simply record it here in Incorplink, once you outsource your accounting, we will have access to your expense records here.</p>

        </div>
    </div>
    </div>
    </div>
    <p className='bottom_text_invoces'>Looking for accounting services?</p>
    </div>
    </div>
  )
}

export default expenses;
