import { Route, Routes } from 'react-router-dom';

// AUTH PAGES
import AuthLayout from '@/components/auth/Layout';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/Register';

// ADMIN PAGES
import AdminLayout from '@/components/admin/Layout';
import Dashboard from '@/pages/admin/Dashboard';
import Products from '@/pages/admin/Products';
import Orders from '@/pages/admin/Orders';
import Features from '@/pages/admin/Features';

// SHOP PAGES
import RootLayout from '@/components/shop/Layout';
import Home from '@/pages/shop/Home';
import Shop from '@/pages/shop/Shop';
import Checkout from '@/pages/shop/Checkout';
import Account from '@/pages/shop/Account';

// ERROR-PAGES
import NotFound from '@/pages/not-found';
import UnAuthPage from '@/pages/unauth-page';

// CHECK-AUTHORIZE
import CheckAuth from '@/components/global/CheckAuth';

const App = () => {
  const isAuthenticated = true;
  const user = {
    name: 'Tushar',
    role: 'admin'
  };

  return (
    <div className='flex flex-col overflow-hidden bg-white w-full'>
      <Routes>
        {/* AUTH-VIEW-ROUTES */}
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* ADMIN-VIEW-ROUTES */}
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='features' element={<Features />} />
        </Route>

        {/* SHOP-VIEW-ROUTES */}
        <Route path='/' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <RootLayout />
          </CheckAuth>
        }>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<Account />} />
        </Route>

        {/* ERROR-ROUTES */}
        <Route path='*' element={<NotFound />} />
        <Route path='/unauth-page' element={<UnAuthPage />} />
      </Routes>
    </div>
  )
}

export default App;
