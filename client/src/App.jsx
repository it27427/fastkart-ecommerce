import React from 'react';
import { Route, Routes } from 'react-router-dom';

// AUTH LAYOUR AND PAGES
import AuthLayout from '@/components/auth/Layout';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/Register';

// ADMIN LAYOUR AND PAGES
import AdminLayout from '@/components/admin/Layout';
import Dashboard from '@/pages/admin/Dashboard';
import Products from '@/pages/admin/Products';
import Orders from '@/pages/admin/Orders';
import Features from '@/pages/admin/Features';

// CLIENT LAYOUT AND PAGES

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='features' element={<Features />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App