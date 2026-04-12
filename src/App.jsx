import React from 'react'
import TitanLanding from './components/TitanLanding'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<TitanLanding/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App