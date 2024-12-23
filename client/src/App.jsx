import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@/components/ui/skeleton';

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
import { checkAuth } from '@/store/auth';

const App = () => {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className='w-[600px] h-[600px]' />;

  return (
    <div className='flex flex-col bg-white w-full'>
      <Routes>
        {/* AUTH-VIEW-ROUTES */}
        <Route
          path='/login'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Login />} />
        </Route>

        <Route
          path='/register'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Register />} />
        </Route>

        {/* ADMIN-VIEW-ROUTES */}
        <Route
          path='/admin'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='features' element={<Features />} />
          <Route path='/admin' element={<Navigate to='/admin/dashboard' />} />
        </Route>

        {/* SHOP-VIEW-ROUTES */}
        <Route
          path='/'
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <RootLayout />
            </CheckAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<Account />} />
        </Route>

        {/* ERROR-ROUTES */}
        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorize' element={<UnAuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
