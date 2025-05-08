import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';

const navLinks = [
  { id: "home", path: "/", title: "Home" },
  { id: "about", path: "/about", title: "About" },
  { id: "products", path: "/products", title: "Products" },
  { id: "contact", path: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-black" : "bg-transparent"} transition-all duration-300`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => window.scrollTo(0, 0)}
        >
          <ShieldCheck size={32} className="text-white" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Hollow Point &nbsp;
            <span className='sm:block hidden'> | Security</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                location.pathname === nav.path ? "text-white" : "text-gray-300"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white focus:outline-none"
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    location.pathname === nav.path ? "text-white" : "text-gray-300"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => setToggle(!toggle)}
                >
                  <Link to={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;