import { Button } from '@nextui-org/react';
import logo from '../assets/logo.svg';
const Navigation = () => {
  return (
    <nav className='flex justify-between items-center py-2'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div></div>
      <div className='flex items-center gap-8'>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>About</li>
        </ul>
        <Button className='bg-gradient-to-r from-[#045CAE] to-[#07156d] px-4 py-2 rounded-full'>
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
