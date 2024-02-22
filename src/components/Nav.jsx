import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
  return (
    <Router>
      <div>
        <nav className='bg-gray-400 p-4'> 
          <ul className='flex items-center justify-between'>
            <a href='/'>
              <img src='/brainey.png' alt='brainey logo' className='w-10 h-10' />
            </a>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cost">Cost</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    </div>
    </Router>
  );
};

export default Nav;
