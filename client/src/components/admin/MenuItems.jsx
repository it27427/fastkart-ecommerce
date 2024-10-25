import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck,
  Expand,
  LayoutDashboard,
  ShoppingBasket,
} from 'lucide-react';

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
}

export default MenuItems;