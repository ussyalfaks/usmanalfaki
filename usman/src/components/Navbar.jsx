import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import resumeFile from '../assets/USMANResume.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile; 
    link.download = '/USMANResume.pdf?url'; 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }


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
    <header className={` flex justify-between items-center  ${menuOpen ? 'h-screen max-md:flex max-md:items-start bg-slate-400' : ''} `}>
      <nav className={`flex justify-between w-full h-full  px-10 pt-8 pb-3 mb-0 ${menuOpen? 'flex flex-col h-full ':''}`}>
        <div className={`mb-4 md:mb-0 flex justify-start  ${menuOpen ? 'md:text-center text-white' : ''}`}>
          <Link to="/" className="Logo font-mono">
            DEVELOPEDBYUSMAN
          </Link>
        </div>
        <div className={`md:flex md:items-center items-center ${menuOpen ? 'h-screen flex justify-center items-center' : ''}`}>
          <ul className={`flex ${menuOpen ? 'flex flex-col items-center justify-center ' : 'max-md:hidden'} `}>
            <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/" className='hidden'>Home</NavLink>
            </li>
            {/* <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="md:mx-4 my-2 md:my-0">
              <NavLink to="/contact">Collection</NavLink>
            </li> */}
            <li className="">
              <NavLink to="#"
              onClick={downloadResume}
               className=" bg-[#437D9D] p-3 rounded-2xl hover:border-blue-700 hover:border-2 text-white">
                Resume
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className={` ${menuOpen? 'p-7 px-4' :'md:hidden px-4'}`}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl cursor-pointer "
          />
        </div>
    </header>
  );
};

export default Navbar;
