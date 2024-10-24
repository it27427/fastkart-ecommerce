import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Redirect unauthenticated users away from protected routes
  if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    return <Navigate to='/login' replace />;
  }
  
  // Redirect authenticated users away from login/register pages
  if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    if (user?.role === 'admin') {
      return <Navigate to='/admin/dashboard' replace />;
    }
    return <Navigate to='/' replace />;
  }

  // Prevent non-admin users from accessing admin routes
  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    return <Navigate to='/unauthorize' replace />;
  }

  // Redirect admin to their dashboard when trying to access the root page
  if (isAuthenticated && user?.role === 'admin' && location.pathname === '/') {
    return <Navigate to='/admin/dashboard' replace />;
  }

  return <>{children}</>;
};

export default CheckAuth;
