import React from 'react';
import { shopHeaderMenuItems } from '@/config/index';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <ul className='flex flex-col mb-3 lg:mb-0 lg:flex-row gap-6 lg:items-center'>
      {shopHeaderMenuItems.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className='text-sm font-medium'>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
