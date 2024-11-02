import { Link } from 'react-router-dom';
import BrandLogo from '@/assets/images/logo/logo.svg';

const Logo = () => {
  return (
    <>
      <Link to='/' className='flex items-center'>
        <figure className='flex items-center justify-center'>
          <img src={BrandLogo} alt='BRAND-LOGO' />
        </figure>
      </Link>
    </>
  );
};

export default Logo;
