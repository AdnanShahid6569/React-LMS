import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return localStorage.getItem('UID') ? <Outlet /> : <Navigate to='Login'/>
}

export default ProtectedRoute