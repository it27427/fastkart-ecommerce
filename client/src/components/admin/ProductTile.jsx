import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductTile = ({ product }) => {
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <div>
        <figure className='positive'>
          <img
            src={product?.image}
            alt={product?.title}
            className='w-full h-[300] object-cover rounded-t-lg'
          />
        </figure>
      </div>

      <CardContent>
        <div className='flex flex-col gap-2 mb-2'>
          <h2 className='text-lg font-bold'>{product?.title}</h2>
          <div className='flex items-center justify-between'>
            <span
              className={`text-lg font-semibold text-primarybg ${
                product.saleprice > 0 ? 'line-through' : ''
              }`}
            >
              ${product?.price}
            </span>
            <span className='text-lg font-bold'>${product?.saleprice}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='flex items-center justify-between'>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductTile;
