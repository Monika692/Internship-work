import React from 'react'
import "./App.css"
import {Route,Routes} from 'react-router-dom';
// Pages Imported
import Sidebar from './Sidebar/Sidebar';
import General from './Dashboards/General/General';
import Revenue from './Dashboards/Revenue/Revenue';
import Billing from './Dashboards/Billing/Billing';
import Debt from './Dashboards/Debt/Debt';
import Distributor from './Dashboards/Distributor/Distributor';
import Expenses from './Dashboards/Expenses/Expenses';
import Inventory from './Dashboards/Inventory/Inventory';
import Lending from './Dashboards/Lending/Lending';
import Rentals from './Dashboards/Rentals/Rentals';
import Staff from './Dashboards/Staff/Staff';
import Transaction from './Dashboards/Transaction/Transaction';



function App() {
  return (
    
    <div className='container'>
      <div className="sideBar">
      <Sidebar />
      </div>
      <div className="Dasboard">
      <Routes>
        <Route path='/' element={<General/>} />
       <Route path='/Revenue' element={<Revenue/>}/>
       <Route path='/Debt' element={<Debt/>}/>
       <Route path='/Distributor' element={<Distributor/>}/>
       <Route path='/Expenses' element={<Expenses/>}/>
       <Route path='/Inventory' element={<Inventory/>}/>
       <Route path='/Rentals' element={<Rentals/>}/>
       <Route path='/Lending' element={<Lending/>}/>
       <Route path='/Staff' element={<Staff/>}/>
       <Route path='/Transaction' element={<Transaction/>}/>
       <Route path='/Billing' element={<Billing/>}/>
     
    
      </Routes>
      </div>
      
    </div>
  )
}

export default App