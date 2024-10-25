import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ProductImageUpload = () => {
  return (
    <>
      <div className='w-full max-w-md mx-auto pt-6'>
        <Label className='text-sm font-medium block mb-2'>Upload Image</Label>
        <Input type='file' id='image-upload' className='hidden' />
      </div>
    </>
  );
};

export default ProductImageUpload;
