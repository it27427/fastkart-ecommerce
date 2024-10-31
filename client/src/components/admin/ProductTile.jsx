import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ProductTile = ({
  product,
  setFormData,
  setOpenCreateProducts,
  setCurrentEditedId,
}) => {
  return (
    <Card className='w-full max-w-sm mx-auto'>
      <figure className='positive overflow-hidden'>
        <img
          src={product?.image}
          alt={product?.title}
          className='w-full h-[12.5rem] object-cover rounded-t-lg'
        />
      </figure>

      <CardContent>
        <div className='flex flex-col gap-2 mb-2 pt-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h2 className='text-lg font-bold line-clamp-1 text-left'>
                  {product?.title}
                </h2>
              </TooltipTrigger>
              <TooltipContent className='bg-primary border-primary'>
                <p className='text-white font-semibold font-barlow text-xs'>
                  {product?.title}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className='flex items-center justify-between'>
            <span
              className={`text-lg font-semibold text-primarybg ${
                product.salePrice > 0 ? 'line-through' : ''
              }`}
            >
              ${product?.price}
            </span>

            {product.salePrice > 0 ? (
              <span className='text-lg font-bold'>${product?.salePrice}</span>
            ) : null}
          </div>
        </div>
      </CardContent>

      <CardFooter className='flex items-center justify-between'>
        <Button
          onClick={() => {
            setOpenCreateProducts(true);
            setCurrentEditedId(product?._id);
            setFormData(product);
          }}
          variant='outline'
          className='font-barlow'
        >
          Edit
        </Button>

        <Button
          onClick={() => {}}
          variant='destructive'
          className='font-barlow'
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductTile;
