import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CommonForm from '@/components/common/Form';
import { RegisterFormControls } from '@/config/index';
import { registerUser } from '@/store/auth';

const title = 'Create New Account';

const initialState = {
  userName: '',
  email: '',
  phone: '',
  password: ''
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      if(data?.payload?.success) navigate('/login');
    });
  };

  // console.log(formData)

  return (
    <div className='mx-auto w-full space-y-6'>
      <div className="text-center">
        <h2 className='text-4xl font-oxanium font-bold tracking-tight text-foreground'>
          {title}
        </h2>
      </div>

      <CommonForm
        formControls={RegisterFormControls}
        buttonText='Sign Up'
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="mt-2 text-center">
        <p className='font-oxanium'>
          Already have an account?
          
          <Link to='/login' className='font-bold hover:underline hover:text-primarybg font-playwriteGBS ml-2'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register;