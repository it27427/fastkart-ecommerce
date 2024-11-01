import React from 'react';
import { shopHeaderMenuItems } from '@/config/index';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <ul className='flex flex-col mb-3 lg:mb-0 lg:flex-row gap-6 lg:items-center'>
      {shopHeaderMenuItems.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
