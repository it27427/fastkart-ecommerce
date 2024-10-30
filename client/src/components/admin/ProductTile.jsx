import React from 'react';
import { Card } from '@/components/ui/card';

const ProductTile = ({ product }) => {
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <div>
        <figure className='positive'>
          <img src={product?.image} alt={product?.title} />
        </figure>
      </div>
    </Card>
  );
};

export default ProductTile;
