import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard';

const App = () => {
  return (
    <>
    <div className="container">
      
    <Routes>
      <Route exact path= "/" element={<Dashboard/>}></Route>
    </Routes>
    </div>
    

    </>
  )
}

export default App;