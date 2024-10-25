import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BrandLogo from '@/assets/images/logo/logo.svg';

const BrandHeader = ({ setOpen }) => {
  const navigate = useNavigate();
  
  const navigateToHome = () => {
    navigate('/admin/dashboard')
    setOpen ? setOpen(false) : null
  };

  return (
    <header className='h-16 flex items-center justify-center border-b -mx-6 overflow-hidden'>
      <Button onClick={navigateToHome} className='bg-transparent hover:bg-transparent p-0 gap-0'>
        <figure className='flex items-center justify-center'>
          <img src={BrandLogo} alt="ADMIN-BRAND-LOGO" />
        </figure>
      </Button>
    </header>
  )
}

export default BrandHeader;