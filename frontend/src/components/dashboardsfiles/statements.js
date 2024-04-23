import React from 'react'
import '../login/loginsignup.css';

const statements = () => {
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
          <h5>Record your bank statements in one place</h5>
          <p>Keep your bank statements here so that all your expenses, invoices & statements live in one central place for easy reference by your accountant.</p>
        </div>
    </div>
    </div>
    </div>
    <p className='bottom_text_invoces'>Looking for accounting services?</p>
    </div>
    </div>
  )
}

export default statements;
