import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion';
import React from 'react'
import { Link } from "react-scroll";


function Main() {
  return (
  <div className='name'>
      <div className='f-name'>
        <h4 className='fname'>ARYAN</h4>
      </div>
      <div className='l-name'>
        <h1 className='lname'>KADAM</h1>
      </div>
      <div className='about'>
        <h4 className='aboutme'>I AM A PASSIONATE <b>WEB DEVELOPER</b> SPECIALIZING IN MACHINE LEARNING</h4>
        <h4 className='aboutme'>AND CREATING INTERACTIVE AND EYE PLEASANT USER EXPERIENCES</h4>
      </div>
    <div className='buttons'>
      <motion.div  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='contbut'>
        <button className='cont-but' ><a className='cont-but'>Contact</a></button>
      </motion.div>
      <motion.div  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='resbut'>
        <button className='res-but'><a className='res-but' href='https://app.luminpdf.com/viewer/672ee7c2fe481ab850e3306e' target='_blank'>Resume</a></button>
      </motion.div>
    </div>
    <div className='work-div' id='one'>
      <div className='work-heading'>
      <h1 className='landing-pg'>KISAAN SAMARTH</h1>
      <h3 className='landpg-heading'>Developed a website named "KISAN SAMARTH" as part of our SIH team project using React for the frontend and MongoDB for the database. The platform aims to empower farmers with real-time information, resources, and support, providing a user-friendly interface for easy access to essential agricultural tools and services.</h3>
      </div>
      <div className='work'>
      <motion.div  whileHover={{ scale: 1.3 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='git-icons'>
        <a href='https://constract.vercel.app/'><Github className='git-icon'/></a>
      </motion.div>
        <motion.img  whileHover={{ scale: 1.1 }}  
        transition={{ type: 'spring', stiffness: 300 }} src='/farmer.png'></motion.img>
      </div>
    </div>
    <div id='work-div'>
      <div id='work'>
      <motion.div  whileHover={{ scale: 1.3 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='github-icons'>
        <a href='https://github.com/ARYANKADAM/Tic-Tac-Toe'  target='_blank'><Github className='github-icon'/></a>
      </motion.div>
      <motion.img  whileHover={{ scale: 1.1 }}  
        transition={{ type: 'spring', stiffness: 300 }} src='/x and 0.png' id='x0game'></motion.img>
      </div>
      <div id='work-heading'>
      <h1 id='landing-pg'>X & 0 Game</h1>
      <h3 id='landpg-heading'>Developed a simple yet engaging X and O game (Tic-Tac-Toe) using React. The game features an intuitive interface, allowing users to play with computer with a smooth, interactive experience. It showcases my skills in React components, state management, and user interface design.</h3>
      </div>
    </div>
    <div className='Work-div'>
      <div className='work-heading'>
      <h1 className='landing-pg'>PORTFOLIO</h1>
      <h3 className='landpg-heading'>Created a personal portfolio website using React, featuring a visually appealing and user-friendly interface. The site showcases my skills, projects, and experience with smooth navigation, responsive design, and an engaging layout, reflecting my expertise in web development and UI design.</h3>
      </div>
      <div className='work'>
      <motion.div  whileHover={{ scale: 1.1 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='git-icons'>
       <a href='https://github.com/ARYANKADAM/personal-portfolio'> <Github className='git-icon'/></a>
      </motion.div>
        <motion.img  whileHover={{ scale: 1.2 }}  
        transition={{ type: 'spring', stiffness: 300 }}  src='/portfolio.png' className='portfolio' ></motion.img>
      </div>
    </div>
    <div className='about-pg' id='two'>
      <div className='about-heading'>
      <div className='aboutpg-name'>
        <motion.h1 whileHover={{ scale: 0.9 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='about-pg-name'>HI! I'm ARYAN KADAM</motion.h1>
        <p className='about-para'>located in Mumbai.I'm a  B.E student
        from Thakur College of Engineering and technology, pursuing IT Engineering</p>
        <p className='about-para'>I’m a passionate and detail-oriented web developer with experience in crafting dynamic, user-friendly websites and web applications. I specialize in front-end, back-end development and frameworks too </p>
        <p className='about-para'>I’m always eager to learn new skills and stay up-to-date with the latest trends in web development to deliver innovative and efficient solutions. </p>
      </div>
      </div>
      <div className='skills'>
        <h6 className='frontend-hd'>FRONTEND TOOLS</h6>
        < p className='frontend-para'>HTML,CSS,JAVASCRIPT(ES6),REACT,TAILWIND CSS</p>
        <h6 className='backend-hd'>BACKEND TOOLS</h6>
        < p className='backend-para'>SPRINGBOOT,PYTHON</p>
        <h6 className='uiux-hd'>UI/UX TOOLS</h6>
        < p className='uiux-para'>FIGMA,CANVA</p>
        <h6 className='database-hd'>DATABASE</h6>
        < p className='database-para'>MONGO-DB,MY-SQL</p>
      </div>
    </div>
    <div className='contact-pg' id='three'>
      <motion.div  whileHover={{ scale: 0.9 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='contactpg'>
        <h1 className='reachout'>REACH OUT</h1>
        <h1 className='anytime'>ANYTIME</h1>
      </motion.div>
      <motion.div  whileHover={{ scale: 0.9 }}  
        transition={{ type: 'spring', stiffness: 300 }} className='icons'>
      <a className='icon' href='mailto:kadamaryan21418@gmail.com' target='_blank'><Mail className='icon' /></a>
      <a className='icon' href='https://github.com/ARYANKADAM' target='_blank'><Github className='icon'/></a>
      <a className='icon' href='https://www.linkedin.com/in/aryankadam974/' target='_blank'><Linkedin className='icon'/></a>
      <a className='icon' target='_blank'><Twitter  className='icon'/></a>
      </motion.div>
      <hr></hr>
      <div className='footer'>
        <h3 className='arru'>DEVELOPED BY ARYAN KADAM</h3>
      </div>
    </div>
  </div>
   
  )
}


export default Main
