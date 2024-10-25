import React from 'react'
import BrandLogo from '@/assets/images/logo/logo.svg';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/admin/dashboard');

  return (
    <>
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
        <Button onClick={navigateToHome} className='bg-transparent hover:bg-transparent'>
          <figure className='flex items-center justify-center'>
            <img src={BrandLogo} alt="ADMIN-BRAND-LOGO" />
          </figure>
        </Button>
      </aside>
    </>
  )
}

export default AdminSidebar;