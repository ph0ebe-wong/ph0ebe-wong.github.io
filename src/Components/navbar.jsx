import React, { useState, useEffect, useRef } from 'react';
import './Styling/NavBar.css'
import Logo from './Assets/phoebe_logo.PNG'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const indicatorRef = useRef(null);

  const handleItemClick = (item, event) => {
    setActiveItem(item);
    updateIndicator(event.target);
  };

  const updateIndicator = (activeElement) => {
    const width = activeElement.offsetWidth;
    const left = activeElement.offsetLeft;
    indicatorRef.current.style.width = `${width}px`;
    indicatorRef.current.style.left = `${left}px`;
  };

  useEffect(() => {
    const activeElement = document.querySelector('.nav-item.current');
    if (activeElement) {
      updateIndicator(activeElement);
    }
  }, [activeItem]);


  return (
    <nav class="nav">
      <div class="container">
        <img className="navbar-logo" src={Logo }/> 
        <ul>
          <li><a href="#" className={`nav-item ${activeItem === 'home' ? 'current' : ''}`} onClick={(e) => handleItemClick('home', e)}>Home</a></li>
          <li><a href="#" className={`nav-item ${activeItem === 'experience' ? 'current' : ''}`} onClick={(e) => handleItemClick('experience', e)}>Experience</a></li>
          <li><a href="#" className={`nav-item ${activeItem === 'projects' ? 'current' : ''}`} onClick={(e) => handleItemClick('projects', e)}>Projects</a></li>
        </ul>      
        <span ref={indicatorRef} className="nav-indicator"></span>
      </div>
    </nav>  
  );
};


export default Navbar;
