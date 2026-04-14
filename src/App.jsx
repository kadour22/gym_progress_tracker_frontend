import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import TitanLanding from './components/landing/TitanLanding'
import Navbar from './components/navbar/Navbar'
import { LoginPage } from './components/auth/Login'
import { RegisterPage } from './components/auth/Register'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<TitanLanding/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/dashboard' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App