import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    return (
      <Navigate to='/login' />
    )
  }
  
  if (isAuthenticated && user?.role === 'admin' && (location.pathname === '/admin' || location.pathname === '/admin/')) {
    return <Navigate to='/admin/dashboard' />
  }

  if (isAuthenticated && user?.role !== 'admin' && location.pathname.startsWith('/admin')) {
    return <Navigate to='/unauth-page' />
  }

  if (isAuthenticated && user?.role === 'admin' && location.pathname === '/') {
    return <Navigate to='/admin/dashboard' />
  }

  return <>{children}</>
}

export default CheckAuth;