import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck,
  Expand,
  LayoutDashboard,
  ShoppingBasket,
} from 'lucide-react';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import BrandHeader from './BrandHeader';

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

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();

  return (
    <ul className='flex flex-col gap-2'>
      {
        AdminSidebarMenuItems.map((menuItem) => (
          <li
            className='flex items-center gap-2 px-3 py-2 rounded cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground font-medium font-oxanium'
            role='button'
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path)
              setOpen ? setOpen(false) : null
            }}>
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </li>
        ))
      }
    </ul>
  )
};

const AdminSidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* MOBILE-&-TABLET-VIEW */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='left' className='w-64 p-0' aria-describedby='admin-sidebar-description'>
          <div className="flex flex-col gap-8 h-full">
            <SheetHeader className='h-16 flex items-center justify-center border-b'>
              <BrandHeader setOpen={setOpen} />
              
              <SheetTitle className='hidden'></SheetTitle>
              <SheetDescription className='hidden'></SheetDescription>
            </SheetHeader>
            <nav className='px-6'>
              <MenuItems setOpen={setOpen} />
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* DESKTOP-VIEW */}
      <aside className='hidden w-64 flex-col gap-8 border-r bg-background p-6 pt-0 lg:flex'>
        <BrandHeader />

        <nav>
          <MenuItems />
        </nav>
      </aside>
    </>
  )
}

export default AdminSidebar;