import { useEffect, useRef } from 'react';
import axios from 'axios';
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImgUrl,
  setUploadedImgUrl,
  imageLoading,
  setImageLoading,
  isEditMode,
}) => {
  const inputRef = useRef(null);

  const uploadImageToCloudinary = async () => {
    setImageLoading(true);

    const data = new FormData();
    data.append('my_file', imageFile);

    const url = 'http://localhost:8080/api/admin/products/upload-image';
    const response = await axios.post(url, data);

    if (response.data?.success) {
      setUploadedImgUrl(response.data.result.url);
      setImageLoading(false);
    }
  };

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  const handleImageFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) setImageFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) setImageFile(droppedFile);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto pt-6'>
        <Label className='text-sm font-medium block mb-2'>Upload Image</Label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`${
            isEditMode ? 'opacity-60' : ''
          } border-2 border-input border-dashed rounded px-3 py-2`}
          role='button'
        >
          <Input
            type='file'
            id='image-upload'
            className='hidden'
            ref={inputRef}
            onChange={handleImageFileChange}
            disabled={isEditMode}
          />

          <>
            {!imageFile ? (
              <Label
                htmlFor='image-upload'
                className={`${
                  isEditMode ? 'cursor-not-allowed' : ''
                } flex flex-col items-center justify-center cursor-pointer h-32`}
              >
                <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2' />
                <span>Drag & Drop Or Click to Image Upload</span>
              </Label>
            ) : imageLoading ? (
              <Skeleton className='h-10 bg-slate-100' />
            ) : (
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <FileIcon className='w-8 h-8 text-primary mr-2' />
                </div>

                <p className='text-sm font-medium'>{imageFile.name}</p>

                <Button
                  onClick={handleRemoveImage}
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <XIcon className='w-4 h-4' />
                  <span className='sr-only'>Remove File</span>
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default ProductImageUpload;
