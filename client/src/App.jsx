import React from 'react';
import { Route, Routes } from 'react-router-dom';

// AUTH LAYOUR AND PAGES
import AuthLayout from '@/components/auth/Layout';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/Register';

// ADMIN LAYOUR AND PAGES
import AdminLayout from '@/components/admin/Layout';

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}></Route>
      </Routes>
    </div>
  )
}

export default App