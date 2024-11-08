import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-scroll";





function Header() {
  return (
    <div className='navbar'>
        <ul className='nav-components'>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} >
        <Link 
        to="home" 
        smooth={true} 
        duration={500} 
        className="block text-gray-900 hover:text-blue-500" 
      >
        Home
        </Link>
        </motion.a></li>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }}  >
        <Link 
        to="two" 
        smooth={true} 
        duration={500} 
        className="block text-gray-900 hover:text-blue-500" 
      >
        About
        </Link>
        </motion.a></li>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} ><Link 
              to="one" 
              smooth={true} 
              duration={500} 
            >
              Work
            </Link></motion.a></li>
        </ul>
    </div>
  )
}

export default Header

