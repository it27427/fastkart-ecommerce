import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import CommonForm from '@/components/common/Form';
import { addProductFormElements } from '@/config';
import ProductImageUpload from '@/components/admin/ImageUpload';
import { createNewProduct, fetchAllProducts } from '@/store/admin/products';
import { useToast } from '@/hooks/use-toast';

const initialFormData = {
  image: null,
  title: '',
  description: '',
  category: '',
  brand: '',
  price: '',
  salePrice: '',
  totalStock: '',
};

const Products = () => {
  const [openCreateProducts, setOpenCreateProducts] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImgUrl, setUploadedImgUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const { products } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    fetchAllProducts();
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewProduct({ ...formData, image: uploadedImgUrl })).then(
      (data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setImageFile(null);
          setFormData(initialFormData);
          setOpenCreateProducts(false);
          toast({
            title: data?.payload?.message,
          });
        } else {
          toast({
            variant: 'destructive',
            title: data?.payload?.message,
          });
        }
      }
    );
  };

  console.log('Products: ', products, uploadedImgUrl);

  return (
    <>
      <div className='mb-5 flex justify-end w-full'>
        <Button onClick={() => setOpenCreateProducts(true)} className='gap-1'>
          <Plus />
          <span>Add New Product</span>
        </Button>
      </div>

      {/* PRODUCT-UPLOADER */}
      <Sheet
        open={openCreateProducts}
        onOpenChange={() => {
          setOpenCreateProducts(false);
        }}
      >
        <SheetContent
          side='right'
          className='overflow-auto'
          aria-describedby='admin-sidebar-description'
        >
          <SheetHeader>
            <SheetTitle className='-mt-3'>Add New Product</SheetTitle>
            <SheetDescription className='hidden'></SheetDescription>
          </SheetHeader>

          {/* IMAGE-UPLOADER */}
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImgUrl={uploadedImgUrl}
            setUploadedImgUrl={setUploadedImgUrl}
            imageLoading={imageLoading}
            setImageLoading={setImageLoading}
          />

          {/* PRODUCT-FORM-CONFIGURATION */}
          <div className='py-6'>
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText='Add'
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* PRODUCTS-VIEW */}
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'></div>
    </>
  );
};

export default Products;
