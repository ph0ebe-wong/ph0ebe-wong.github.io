import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import cognidex from "./Assets/projects/cognidex.png";
import ecoden from "./Assets/projects/ecoden home.jpg";
import matchable from "./Assets/projects/matchable home.jpg";
import papaya from "./Assets/projects/papaya food court home.jpg";
import solarwind from "./Assets/projects/solarwind.jpeg";
import portflio from  "./Assets/projects/portfolio.png";
import './Styling/projects.css';
import {useMediaQuery} from '@react-hook/media-query'


const projectData = [
  
  {
    id: 'ecoden',
    backgroundImage: ecoden,
    title: "ECO-DEN SUPERMARKET",
    description: ["A e-commerce supermarket website allows user to browse, add and purchase grocery items with PayPal, and includes a membership point system through purchases or an in-app card game."], 
    skills: ["HTML", "CSS", "Javascript", "Flask", "Microsoft SQL"]
  },
  {
    id: 'papaya_food_court',
    backgroundImage: papaya,
    title: "PAPAYA FOOD COURT",
    description: ["An online food delivery service enables users to order and savor local cuisine, with an emphasis on ensuring website security."], 
    skills: ["HTML", "CSS", "Javascript", "Flask", "Python Shelve", "Website security"]
  },
  {
    id: 'matchable',
    backgroundImage: matchable,
    title: "MATCHABLE",
    description: ["An online dating website allows user to conveniently connect with potential partners regardless of distance, with emphasis on ensuring data and website security"], 
    link: '/project-page/matchable', 
    skills: ["HTML", "CSS", "Javascript", "Flask", "MySQL", "Website Security", "Data Security"]
  },
  {
    id: 'solarwind_simulation',
    backgroundImage: solarwind,
    title: "SIMULATION",
    description: ["This project simulates the SolarWinds cyberattack by recreating its vulnerabilities in VMWare environments, implementing defence, monitoring, and backup systems to enhance security and ensure swift recovery"], 
    link: "/project-page/solarwind-simulation",
    skills: ["Kali Linux", "Immunet", "ModSecurity", "Splunk", "VMWare", "Restic"]
  },
  {
    id: 'cognidex',
    backgroundImage: cognidex,
    title: "COGNIDEX",
    description: ["A decentralized application (DApp) that allows users to create, buy, sell data."], 
    link: 'https://www.cognidex.net/', 
    skills: ["Figma", "Reactjs", "AWS", "Postgres", ]
  },
  {
    id: 'portfolio',
    backgroundImage: portflio,
    title: "PORTFOLIO WEBSITE",
    description: ["A website to showcase my portfolio and projects."], 
    skills: ["Reactjs", "GSAP"]
  }

];


const Projects = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery('only screen and (max-width: 768px)');



  return (
    <>
      <div className="div-container" style={{alignItems: 'start', height: '100%'}}>
          <div class='intro-container' style={{alignItems: 'start', flexDirection: 'column'}}>
              <div className="header-container">
                  <h2 className='header-title'>My Projects</h2>
                  <div className='header-divider'/>
              </div>

              <div className='project-card-container' style={{justifyContent: isMobile ? 'center': 'none'}}>

                {
                  projectData.map((project, index) => (
                    <div key={index} className='project-card' id='project-card-div' style={{width: isMobile ? 300 : 350}}>
                      <div>
                        <img className='project-card-img' src={project.backgroundImage} />
                        <h3 className='project-card-title'>{project.title}</h3>
                        <p className='project-card-description'>{project.description}</p>
                      </div>

                      <div>
                        <div className='project-card-skill-list' >
                          {
                            (project.skills).map((skill, index) => (
                                <p key={index} >{skill}</p>
                            ))
                          }
                        </div>
                        {
                          (project.link) && (
                            <Link to={project.link}><OpenInNewOutlinedIcon style={{color: 'white', marginTop: 10, cursor: 'pointer'}}  /></Link>
                            
                          )
                        }                        
                      </div>
                  </div>
                  ))
                }
              </div>
              <div className='extension-container' />
          </div>
      </div>

      <div className='extension-container' />
    </>
  );
}

export default Projects;