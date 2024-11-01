import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/logo.svg';

const BrandLogo = () => {
  return (
    <>
      <Link to='/' className='flex items-center'>
        <figure className='flex items-center justify-center'>
          <img src={Logo} alt='BRAND-LOGO' />
        </figure>
      </Link>
    </>
  );
};

export default BrandLogo;
