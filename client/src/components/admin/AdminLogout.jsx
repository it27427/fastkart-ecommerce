import { useDispatch } from 'react-redux';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logOutUser } from '@/store/auth';

const AdminLogout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Button
      onClick={handleLogOut}
      className='inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium font-oxanium shadow'
    >
      <LogOut /> LogOut
    </Button>
  );
};

export default AdminLogout;
