import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../Component/AdminSidebar'
import { Toaster } from 'react-hot-toast'

function AdminPage() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AdminSidebar />
      <Outlet />
    </>
  )
}

export default AdminPage