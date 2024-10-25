import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <>
      <div className='mb-5 flex justify-end w-full'>
        <Button className='gap-1'>
          <Plus />
          <span>Add New Product</span>
        </Button>
      </div>

      <div className='grid gap-4 grid-cols-2'></div>
    </>
  )
}

export default Products;