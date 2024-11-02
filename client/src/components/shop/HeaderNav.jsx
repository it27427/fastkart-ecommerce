import { useSelector } from 'react-redux';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

const HeaderNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className='flex h-16 items-center justify-between px-6 w-full'>
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
