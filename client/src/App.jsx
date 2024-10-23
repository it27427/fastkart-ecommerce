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

// SHOP LAYOUT AND PAGES
import RootLayout from '@/components/shop/Layout';
import Home from '@/pages/shop/Home';
import Shop from '@/pages/shop/Shop';
import Checkout from '@/pages/shop/Checkout';
import Account from '@/pages/shop/Account';

// NOTFOUND
import NotFound from '@/pages/not-found';

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        {/* AUTH-VIEW-ROUTES */}
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* ADMIN-VIEW-ROUTES */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='features' element={<Features />} />
        </Route>

        {/* SHOP-VIEW-ROUTES */}
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
        </Route>

        {/* NOT-FOUND-ROUTES */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App