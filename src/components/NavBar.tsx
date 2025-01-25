'use client';


import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';
import Link from 'next/link';


const navLinkClasses = 'nav-link w-full h-full font-sans font-bold flex justify-center items-center hover:cursor-pointer hover:text-navmenu';

const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`w-full sm:px-16 px-6 py-8 pb-0 fixed z-50 bg-white`}
    >
      <div className='w-full flex'>
        <div className="logo flex flex-1 justify-center items-center">
          <img
            src="/assets/descon-logo.png"
            alt="search"
            className="w-16 object-contain"
          />
          <Link href='/' className='font-sans font-bold text-2xl' >DESCON</Link>
        </div>
        <nav className="nav-elements flex flex-6 px-6 items-center">
          <ul className='flex w-1/2 h-full justify-between'>
            <li className={navLinkClasses}>Home</li>
            <li className={navLinkClasses}>About</li>
            <li className={navLinkClasses}>Services</li>
            <li className={navLinkClasses}>Management</li>
            <li className={navLinkClasses}>Contact</li>
          </ul>
        </nav>
      </div>
    </motion.nav>
  )
}

export default NavBar