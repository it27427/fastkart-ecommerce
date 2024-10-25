import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/auth';
import { LoginFormControls } from '@/config/index';
import { useToast } from '@/hooks/use-toast';

import CommonForm from '@/components/common/Form';

const title = 'Login To Your Account';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          variant: 'destructive',
          title: data?.payload?.message,
        });
      }
    });
  };

  return (
    <div className='mx-auto w-full space-y-6'>
      <div className='text-center'>
        <h2 className='text-4xl font-oxanium font-bold tracking-tight text-foreground'>
          {title}
        </h2>
      </div>

      <CommonForm
        formControls={LoginFormControls}
        buttonText='Sign In'
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className='text-center mt-2'>
        <p className='font-oxanium'>
          Don't have any account?
          <Link
            to='/register'
            className='font-bold hover:underline hover:text-primarybg font-playwriteGBS ml-2'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
