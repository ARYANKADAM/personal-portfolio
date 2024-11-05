import React from 'react'
import { motion } from 'framer-motion';



function Header() {
  return (
    <div className='navbar'>
        <ul className='nav-components'>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} href='#'>HOME</motion.a></li>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }}  href='#'>ABOUT</motion.a></li>
            <li id='button'><motion.a  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} href='#'>WORK</motion.a></li>
        </ul>
    </div>
  )
}

export default Header

