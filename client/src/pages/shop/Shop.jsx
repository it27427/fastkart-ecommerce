import { useState } from 'react';
import FilterProduct from '@/components/shop/Filter';

const Shop = () => {
  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-[300px_1fr] p-4 md:p-6'>
      <FilterProduct />
    </div>
  );
};

export default Shop;
