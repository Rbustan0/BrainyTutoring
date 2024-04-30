import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/cost', label: 'Cost' },
  ];

  return (
    <div className='relative'>
      <nav className='bg-gray-900 p-4'>
  <div className='container mx-auto items-center flex justify-between'>
    <div className='flex justify-center'>
      <Link to='/'>
        <img
          src='/brainey.png'
          alt='brainey logo'
          className='w-10 h-10'
          style={{ filter: 'invert(1) grayscale(1) contrast(9)', mixBlendMode: 'difference' }}
        />
      </Link>
    </div>
    <div className='text-white hidden md:flex justify-between px-8'>
      <ul className='flex gap-8 px-4'>
        {navItems.map((item, index) => (
          <li key={index} className='flex items-center justify-center px-8 hover:text-gray-200 hover:font-extrabold hover:italic'>
            <Link to={item.path} className='nav-link px-2' onClick={handleLinkClick} style={{ width: '100px' }}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className='md:hidden'>
      <button onClick={toggleMenu} className='text-white focus:outline-none'>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
        </svg>
      </button>
    </div>
  </div>
</nav>

      {isOpen && (
        <div ref={menuRef} className='md:hidden absolute top-0 inset-x-0 bg-gray-900 z-50' onMouseLeave={closeMenu} onClick={closeMenu}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className='p-4'>
                <Link to={item.path} className='nav-link text-white' onClick={handleLinkClick}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
