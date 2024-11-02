import React from 'react';
import { filterOptions } from '@/config';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const FilterProduct = () => {
  return (
    <div className='bg-background rounded-lg shadow-sm'>
      <div className='p-4 border-b'>
        <h2 className='text-lg font-extrabold'>Filters</h2>
      </div>

      <div className='p-4 space-y-4'>
        {Object.keys(filterOptions).map((keyItem) => (
          <div className='flex flex-col gap-2' key={filterOptions[keyItem]}>
            <h3 className='capitalize text-base font-bold'>{keyItem}</h3>

            <div className='grid gap-3'>
              {filterOptions[keyItem].map((option) => (
                <Label
                  key={option.id}
                  className='flex items-center gap-2 font-normal cursor-pointer'
                >
                  <Checkbox /> {option.label}
                </Label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
