import React from 'react';
import { Link } from 'react-router-dom';
import '../login/loginsignup.css';

const dashboards = () => {
  return (
    <div className=' dashboards_bg'>
    <div className="container">
      <div className="row Id-row">
      <div className="col-md-8">
        <div className='dashboards_first_left'>
          <h1>Welcome back, Incorplink!</h1>
          <p>This is your company's dashboard</p>
          </div>
          <div className='welcome_dashbaord'>
             <h5 className='dashboardleft_h'>Welcome to our new dashboard  👋</h5>
             <p>We're currently redesigning our platform. We're working hard to provide a better experience and more features.<Link to="./">Please let us know your suggestions on Telegram.</Link></p>
          </div>
        </div>
    <div className="col-md-4">
     <div className='column-right_dash_first'>
     <div className='btn-1_dash btn-2_dash'>
      <Link to="./"> Join Telegram Community</Link>
      </div>
      <div className='btn-1_dash'>
      <Link to="./">What's new</Link>
      </div>
    </div>
    <div className='document_billing'>
      <div className='btn-1_dash btn-2_dash'>
      <Link to="./"> Documents</Link>
      </div>
      <div className='btn-1_dash'>
      <Link to="./"> Billing</Link>           
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default dashboards;
