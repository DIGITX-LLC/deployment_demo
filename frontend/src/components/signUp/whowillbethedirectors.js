import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'; // Import react-select
import '../login/loginsignup.css';

function WhoWillBeTheDirectors() {
  const [forms, setForms] = useState([
    {
      fullName: '',
      email: '',
      phone: '',
      countryCode: null,
      role: '',
      country: ''
    }
  ]);

  // Sample country code options
  const countryCodes = [
    { value: '+1', label: '🇺🇸 +1', placeholder: '123-456-7890', flag: '🇺🇸' },
    { value: '+88', label: '🇧🇩 +880', placeholder: '1234-567890', flag: '🇧🇩' }, // Added placeholders for BGD and US
    // Add more country options as needed
  ];

  useEffect(() => {
    console.log("Forms updated:", forms);
  }, [forms]);

  const handlePhoneChange = (index, selectedOption) => {
    // When a country code is selected from the dropdown, update the phone state accordingly
    setForms(prevState => {
      const updatedForms = [...prevState];
      updatedForms[index] = {
        ...updatedForms[index],
        countryCode: selectedOption,
        phone: '' // Clear phone number when country code changes
      };
      return updatedForms;
    });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setForms(prevState => {
      const updatedForms = [...prevState];
      updatedForms[index] = {
        ...updatedForms[index],
        [name]: value
      };
      return updatedForms;
    });
  };

  const copyForm = () => {
    setForms(prevState => [
      ...prevState,
      {
        ...prevState[0] // Copy values from the first form for initialization
      }
    ]);
  };

  const deleteForm = (index) => {
    setForms(prevState => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className='bg-white'>
      <div className="container">
        {forms.map((form, index) => (
          <div key={index} className="row Id-row">
            <div className="col-md-5">
              <div className='bg-left-first'>
                <div className='banner-login'>
                  <img src="https://digitxgroup.com/wp-content/uploads/2024/04/Contact-2.png" className="step-2" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="step_first_top step_four_top">
                <h3>Who will be the directors?</h3>
                <p className='step4'>These individuals will be responsible for the management of the company</p>
                <p><strong>Requirements</strong> <br/>
                  <ul>
                    <li>USA requires at least 1 director</li>
                    <li>A director must be above 18 years old</li>
                    <li>At least 1 of the appointed directors has to ordinarily reside in USA</li>
                    <li>Should not be declared bankrupt or face criminal charges</li>
                    <li>Foreign resident directors: Should have a visa valid for at least 6 more months</li>
                  </ul>
                </p>
                <form>
                  <div className='mb-3'>
                    <label htmlFor='fullName'>Full name as per IC/Passport</label>
                    <input type="text" name="fullName" placeholder='Full name as per IC' className='form-control rounded-0' value={form.fullName} onChange={(e) => handleChange(index, e)} />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='email'>Email address</label><br/>
                    <input type="email" name="email" placeholder='Email address' className='form-control rounded-0' value={form.email} onChange={(e) => handleChange(index, e)} />
                    Please ensure this is the actual email of the individual!,<br/>
                    This will be the email address used for SSM & Company matters
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='phone'>Phone</label>
                    <div className="d-flex align-items-center">
                      <Select
                        value={form.countryCode}
                        onChange={(selectedOption) => handlePhoneChange(index, selectedOption)}
                        options={countryCodes}
                        className="mr-2"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: '130px',
                          }),
                        }}
                      />
                      <input type="text" placeholder={form.countryCode ? `${form.countryCode.placeholder}` : 'Enter Your Phone Number'} value={form.phone} onChange={(e) => handleChange(index, e)} className='form-control rounded-0' />
                    </div>
                    Please ensure this is the actual phone number of the individual!
                  </div>
                </form>
                <form>
                  <div className='mb-3'>
                    <label htmlFor='role'>Role of Director</label>
                    <div className="d-flex align-items-center">
                      <input type="text" name="role" placeholder='Role of Director' className='form-control rounded-0' value={form.role} onChange={(e) => handleChange(index, e)} />
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label for="country">Which country does this Director live?</label> <br/>
                    <select name="country" id="country" className='countryselect' value={form.country} onChange={(e) => handleChange(index, e)}>
                      <option value="">Select Country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="USA">USA</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Bhutan">Bhutan</option>
                    </select>
                  </div>
                </form>
                <button className='btn btn-primary border w-100 rounded-0 text-decoration-none getstarted1'><Link to='http://localhost:3000/signup/Shareholders'><strong>next step →</strong></Link></button>
                {forms.length > 1 && <button className='btn  rounded-0 text-decoration-none getstarted1 w-100' onClick={() => deleteForm(index)}><strong>← Delete Form</strong></button>}
              </div>
            </div>
          </div>
        ))}
        <button className='btn btn-secondary rounded-0 text-decoration-none addanotherdirector_btn getstarted1 ' onClick={copyForm}><strong>Add Another Director</strong></button>
      </div>
    </div>
  );
}

export default WhoWillBeTheDirectors;
