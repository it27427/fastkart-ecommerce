import { useSelector } from 'react-redux';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import BrandLogo from './BrandLogo';

const HeaderNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className='flex h-16 items-center justify-between px-6 w-full'>
      {/* BRAND-LOGO */}
      <BrandLogo />

      {/* MOBILE-MENU */}
      <MobileMenu />

      {/* DESKTOP-MENU */}
      <div className='hidden lg:block'>
        <DesktopMenu />
      </div>

      {/* CHECKING USER-AUTHENTICATON */}
      {isAuthenticated ? <div></div> : null}
    </nav>
  );
};

export default HeaderNav;
