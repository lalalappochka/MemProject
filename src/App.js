import React from 'react'
import './App.css'
import Login from './pages/Login'
import Registration from './pages/Registration'
import UserProfile from './pages/UserProfile'
import { Navigate, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/userProfile' element={<UserProfile />} />

      </Routes>
    </div>
  )
}

export default App
