import React from 'react'
import AdminLoginPage from '../layout/AdminLoginPage'


function Auth({ children }) {
    
    const token =   localStorage.getItem('token')

  return (
    <>
    {token ? children : <AdminLoginPage />}
    </>
  )
}

export default Auth