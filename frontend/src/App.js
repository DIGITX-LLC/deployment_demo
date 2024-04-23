import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signUp/Signup'
import Companyname from './components/signUp/nameyourcompany'
import Business from './components/signUp/aboutbusiness'
import Shares from './components/signUp/sharesandpaids'
import Businesscontact from './components/signUp/businesscontactdetails'
import Whowilldirectors from './components/signUp/whowillbethedirectors'
import Shareholderss from './components/signUp/Shareholders'
import Submittedfull from './components/signUp/submittedsuccessfull'
import Selectedplan from './components/signUp/selectplan'
import IntroFlow from './components/signUp/introFlow'
import Makedpayemnt from './components/signUp/makepayment'
import Dashboard from './components/dashboardsfiles/dashboards'
import Invoices from './components/dashboardsfiles/invoices'
import Expense from './components/dashboardsfiles/expenses'
import Statement from './components/dashboardsfiles/statements'
import Accountings from './components/dashboardsfiles/accounting'
import Legal from './components/dashboardsfiles/legal'
import Banks from './components/dashboardsfiles/banks'
import Perks from './components/dashboardsfiles/perks'
import Companies from './components/dashboardsfiles/yourcompanies'
import RegisterComapanies from './components/dashboardsfiles/registercompany'
import Profile from './components/dashboardsfiles/profile'
import Updatepassword from './components/dashboardsfiles/updatepassword'
import ForgotPassword from './components/login/forgetPassword'
import Sidebar from './components/dashboardsfiles/sidebar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}> </Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/signup/intro' element={<IntroFlow/>}></Route>
        <Route path='/signUp/nameyourcompany' element={<Companyname/>}></Route>
        <Route path='/signUp/aboutbusiness' element={<Business/>}></Route>
        <Route path='/signUp/sharesandpaids' element={<Shares/>}></Route>
        <Route path='/signUp/businesscontactdetails' element={<Businesscontact/>}></Route>
        <Route path='/signUp/whowillbethedirectors' element={<Whowilldirectors/>}></Route>
        <Route path='/signUp/Shareholders' element={<Shareholderss/>}></Route>
        <Route path='/signUp/submittedsuccessfull' element={<Submittedfull/>}></Route>
        <Route path='/signUp/selectplan' element={<Selectedplan/>}></Route>
        <Route path='/signUp/makepayment' element={<Makedpayemnt/>}></Route>
        <Route path='/yourcompanies' element={<Companies/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/updatepassword' element={<Updatepassword/>}></Route>
        <Route path='/register' element={<RegisterComapanies/>}></Route>
      </Routes>
      <Sidebar>
      <Routes>
        <Route path='/dashboards' element={<Dashboard/>}></Route>
        <Route path='/invoices' element={<Invoices/>}></Route>
        <Route path='/expenses' element={<Expense/>}></Route>
        <Route path='/statements' element={<Statement/>}></Route>
        <Route path='/accounting' element={<Accountings/>}></Route>
        <Route path='/legal' element={<Legal/>}></Route>
        <Route path='/banks' element={<Banks/>}></Route>
        <Route path='/perks' element={<Perks/>}></Route>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
