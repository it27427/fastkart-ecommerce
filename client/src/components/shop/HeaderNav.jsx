import { useSelector } from 'react-redux';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const HeaderNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className='w-full h-16 flex items-center justify-between px-6'>
      {/* BRAND-LOGO */}
      <Logo />

      {/* MOBILE-MENU */}
      <MobileMenu />

      {/* DESKTOP-MENU */}
      <div className='hidden lg:block'>
        <MainMenu />
      </div>

      {/* CHECKING USER-AUTHENTICATON */}
      {isAuthenticated ? <div></div> : null}
    </nav>
  );
};

export default HeaderNav;
