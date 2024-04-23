import React from 'react'
import '../login/loginsignup.css';

const perks = () => {
  return (
<div className='invoices'>
    <div className="container">
    <div className='bank_bg'>
    <h3>The best perks for your startup 🙌</h3>
    <p className='perks_p'>Find the best discounts for your company. Because we want the best for you.</p>
      <div className="row Id-row">
      <div className="col-md-4">
        <div className='bank_sec perks_sec'>
         <div className='perks_logo'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/omni-hotline-logos-idI7rDV-JJ.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>Omni (Virtual Business & Office Phone System)</h5>
            <span>$ 69/month</span>
         </div>
         </div>

         <div className='bank_sec perks_sec'>
         <div className='perks_logo get_color'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/GetDoc.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>GetDoc (Jireh Group MY)</h5>
            <span>67% off annual subscription</span>
         </div>
         </div>


        </div>
    <div className="col-md-4">
        <div className='per_right'>
        <div className='bank_sec perks_sec '>
         <div className='perks_logo hori_color'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Prospr-hori.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>Prospr</h5>
            <span>Consultation + 1 PR Campaign</span>
         </div>
         </div>

         <div className='bank_sec perks_sec '>
         <div className='perks_logo polisrti_color'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/PolicyStreet-hori.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>PolicyStreet</h5>
            <span>$49/month per employee</span>
         </div>
         </div>

        </div>
    </div>

    <div className="col-md-4">
        <div className='per_right'>
        <div className='bank_sec perks_sec'>
         <div className='perks_logo alignments_color'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Aliments.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>Aliments</h5>
            <span>$80 off + workshop</span>
         </div>
         </div>

         <div className='bank_sec perks_sec'>
         <div className='perks_logo moneymatch_color'>
         <img src="https://digitxgroup.com/wp-content/uploads/2024/04/MoneyMatch-hori.png" className="perks_img" alt="" />
         </div>
         <div className='perks_text'>
            <h5>Money Match</h5>
            <span>$50 off</span>
         </div>
         </div>

          
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default perks
