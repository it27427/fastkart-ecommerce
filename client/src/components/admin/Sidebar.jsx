import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck,
  Expand,
  LayoutDashboard,
  ShoppingBasket,
} from 'lucide-react';

import BrandLogo from '@/assets/images/logo/logo.svg';
import { Button } from '@/components/ui/button';

const AdminSidebarMenuItems = [
  {
    id: 'dashboard',
    icon: <LayoutDashboard />,
    label: 'Dashboard',
    path: '/admin/dashboard',
  },
  {
    id: 'products',
    icon: <ShoppingBasket />,
    label: 'Products',
    path: '/admin/products',
  },
  {
    id: 'features',
    icon: <Expand />,
    label: 'Features',
    path: '/admin/features',
  },
  {
    id: 'orders',
    icon: <BadgeCheck />,
    label: 'Orders',
    path: '/admin/orders',
  },
];

const MenuItems = () => {
  const navigate = useNavigate();

  return (
    <ul className='flex flex-col gap-2'>
      {
        AdminSidebarMenuItems.map((menuItem) => (
          <li
            className='flex items-center gap-2 px-3 py-2 rounded cursor-pointer'
            role='button'
            key={menuItem.id}
            onClick={() => navigate(menuItem.path)
          }>
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </li>
        ))
      }
    </ul>
  )
};

const AdminSidebar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/admin/dashboard');

  return (
    <>
      <aside className='hidden w-64 flex-col gap-8 border-r bg-background p-6 pt-0 lg:flex'>
        <header className='h-16 flex items-center justify-center border-b -mx-6 overflow-hidden'>
          <Button onClick={navigateToHome} className='bg-transparent hover:bg-transparent p-0 gap-0'>
            <figure className='flex items-center justify-center'>
              <img src={BrandLogo} alt="ADMIN-BRAND-LOGO" />
            </figure>
          </Button>
        </header>

        <nav className=''>
          <MenuItems />
        </nav>
      </aside>
    </>
  )
}

export default AdminSidebar;