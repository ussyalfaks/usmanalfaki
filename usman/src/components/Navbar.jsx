import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // UseEffect to close the menu on location change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // UseEffect to handle scroll and history changes
  useEffect(() => {
    // Disable scroll when menu is open
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className={` ${menuOpen ? 'h-screen' : ''} `}>
      <nav className="flex md:flex-row justify-between px-10 pt-8 pb-3 mb-0">
        <div className={`mb-4 md:mb-0 ${menuOpen ? 'md:text-center' : ''}`}>
          <Link to="/" className="Logo font-mono">
            DEVELOPEDBYUSMAN
          </Link>
        </div>

        <div className="md:flex md:items-center md:justify-center items-center justify-center">
          <ul className={`flex  ${menuOpen ? 'flex flex-col md:items-center justify-end mt-52' : 'hidden md:flex'} md:flex-row`}>
            <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/" className='hidden'>Home</NavLink>
            </li>

            {/* <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/contact">Collection</NavLink>
            </li> */}

            <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="#" className=" bg-emerald-950 py-3 px-3 rounded-2xl text-white">Shop</NavLink>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
