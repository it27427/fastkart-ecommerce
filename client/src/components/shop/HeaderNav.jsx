import { useSelector } from 'react-redux';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import AuthMenu from './AuthMenu';

const HeaderNav = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log('user: ', user);

  return (
    <nav className='w-full h-16 flex items-center justify-between px-6'>
      {/* MOBILE-MENU */}
      <MobileMenu />

      {/* BRAND-LOGO */}
      <Logo />

      {/* DESKTOP-MENU */}
      <div className='hidden lg:block'>
        <MainMenu />
      </div>

      {/* CHECKING USER-AUTHENTICATON */}
      {/* {isAuthenticated ? (
        <>
          <AuthMenu />
          </>
          ) : null} */}

      <AuthMenu />
      <div className='hidden lg:block'></div>
    </nav>
  );
};

export default HeaderNav;
