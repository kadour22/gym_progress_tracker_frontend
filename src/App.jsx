import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import TitanLanding from './components/landing/TitanLanding'
import Navbar from './components/navbar/Navbar'
import { LoginPage } from './components/auth/Login'
import { RegisterPage } from './components/auth/Register'
import Profile from './components/auth/Profile'
import CreateProgram from './components/programs/CreateProgram'
import ProgramData from './components/program-data/ProgramData'

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
          <Route path='/create-program' element={<CreateProgram/>}/>
          <Route path='/program-data' element={<ProgramData/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
