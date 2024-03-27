import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Assets/phoebeLogo.png';
import './Styling/NavBar.css';
import {useMediaQuery} from '@react-hook/media-query'
import gsap from 'gsap';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navRef = useRef(null);
  const navigate = useNavigate()


  const handleScroll = () => {
    const sections = ['home', 'experience', 'projects', 'achievements'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const scrollPosition = window.scrollY + navRef.current.offsetHeight;
        return scrollPosition >= element.offsetTop && scrollPosition <= element.offsetTop + element.offsetHeight;
      }
      return false;
    });
    if (currentSection) {
      setActiveItem(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {  
    if (pathname.startsWith('/project-page/')){
      setActiveItem('projects');
    }
  }, [location]); 


  const mobileNavContainerRef = useRef(null);
  const mobileNavCloseRef = useRef(null);
  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'expo.inOut' } });

      mobileNavContainerRef.current.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.to('.mobile-nav', { right: 0 })
            .to('.mobile-nav', { height: '100vh' }, '-=.1')
            .to('.mobile-nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
            .to('.mobile-nav-close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
        }
      });

      mobileNavCloseRef.current.addEventListener('click', () => {
        tl.reverse();
      });

      const navItems = document.querySelectorAll('.mobile-nav ul li a');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          setTimeout(() => {
            if (!tl.reversed()) {
              tl.reverse();
            }
          }, 1000); // Close nav after 1 second
        });
      });

    }
  }, []);  

  return (
    <>
      {
        isMobile ? (
          <>  
            <div className='mobile-nav-div' >
              <div className="mobile-nav-container" ref={mobileNavContainerRef}>
                  {/* <img className="navbar-logo" src={Logo} alt="Logo" onClick={() => navigate('/')} /> */}
                  <div className="mobile-nav-bars"></div>              
              </div>
              
            </div>
            
              <nav ref={navRef} className="mobile-nav">
                <div className="mobile-nav-close" ref={mobileNavCloseRef}>
                  <div></div>
                </div>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#achievements">Achievements</a></li>
                </ul>
              </nav>          
          </>
        ):(
          <nav class="nav" ref={navRef}>
          <div class="container">
            <img className="navbar-logo" src={Logo} onClick={() => {navigate('/')}} /> 
            <ul>
              <li><Link to="/#home" className={`nav-item ${activeItem === 'home' ? 'current' : ''}`} >Home</Link></li>
              <li><Link to="/#experience" className={`nav-item ${activeItem === 'experience' ? 'current' : ''}`} >Experience</Link></li>
              <li><Link to="/#projects"  className={`nav-item ${activeItem === 'projects' ? 'current' : ''}`} >Projects</Link></li>
              <li><Link to="/#achievements" className={`nav-item ${activeItem === 'achievements' ? 'current' : ''}`} >Achievements</Link></li>
            </ul>   
          </div>
        </nav>  
          )
      }
    </>
  );
};


export default Navbar;
