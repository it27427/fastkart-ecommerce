import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const HeaderNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className='flex h-16 items-center justify-between px-6 w-full'>
      <Link to='/shop' className='flex items-center gap-1'>
        <Store className='w-5 h-5' />
        <span className='font-bold mt-1 uppercase'>Shop</span>
      </Link>

      {/* MOBILE-MENU */}
      <MobileMenu />

      {/* DESKTOP-MENU */}
      <div className='hidden lg:block'>
        <DesktopMenu />
      </div>
    </nav>
  );
};

export default HeaderNav;
