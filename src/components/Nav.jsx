import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className='bg-blue-400 p-4'> 
        <ul className='grid grid-cols-7'>
          <span className='col-span-2 flex justify-center'>
            <li>
              <Link to="/">
                <img src='/brainey.png' alt='brainey logo' className='w-10 h-10' />
              </Link>
            </li>
          </span>
          <span className='text-zinc-100 col-span-3 grid grid-cols-4'>
            <li className='flex items-center justify-center hover:rounded-md hover:border-x-2'>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className='flex items-center justify-center hover:rounded-md hover:border-x-2'>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className='flex items-center justify-center hover:rounded-md hover:border-x-2'>
              <Link to="/cost" className="nav-link">Cost</Link>
            </li>
            <li className='flex items-center justify-center hover:rounded-md hover:border-x-2'>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
