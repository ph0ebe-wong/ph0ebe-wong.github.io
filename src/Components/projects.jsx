import './Styling/projects.css';
import ecoden from "./Assets/projects/ecoden home.jpg"
import matchable from "./Assets/projects/matchable home.jpg"
import papaya from "./Assets/projects/papaya food court home.jpg"
import cognidex from "./Assets/projects/cognidex.png"
import solarwind from "./Assets/projects/solarwind.jpeg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
    skills: ["HTML", "CSS", "Javascript", "Flask", "MySQL", "Website Security", "Data Security"]
  },
  {
    id: 'solarwind_simulation',
    backgroundImage: solarwind,
    title: "SIMULATION",
    description: ["This project simulates the SolarWinds cyberattack by recreating its vulnerabilities in VMWare environments, implementing defence, monitoring, and backup systems to enhance security and ensure swift recovery"], 
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
    backgroundImage: "url('https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/6/desktop_VALERIAN_BNP_02.jpg')",
    title: "PORTFOLIO WEBSITE",
    description: ["A website to showcase my portfolio and projects."], 
    skills: ["Reactjs", "GSAP"]
  }

];


const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(null); 

  const toggleProjectImg = (index) => {
    if (visibleProject === index) {
      setVisibleProject(null);
    } else {
      setVisibleProject(index);
    }
  };

  const navigate = useNavigate()


  return (
    <div className="projects-div">
      <h1 >Project Launchpad</h1>
      <div className="grid-container" >
        {projectData.map((project, index) => (
          <>
            <div key={index} className="project-computer-case">
              <div className="project-computer-rim">
                <div className="project-computer-screen">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-computer-screen-skills" >
                    {project.skills.map((skill, index) => (
                      <span key={index}>{skill}</span> 
                    ))}                
                  </div>
                  {project.link &&
                    <button className="project-btn">
                      Explore
                    </button>
                  }
                  <div
                    className="toggle-project-btn"
                    // onClick={() => setVisibleProject(index)}
                    onClick={()=>navigate(
                      '/project',
                      { state: { project: project }} 
                    )}
                  >
                    <KeyboardArrowUpIcon />
                    <p>Click to view project</p>
                  </div>

                  {visibleProject === index && (
                    <>
                      <div style={{background: 'black', width: 430, height: 305, position: 'absolute', top: 0, left: 0}}>
                        <div>
                          </div>
                        <img src={project.backgroundImage} alt={project.title} className="project-image"  />
                          {/* <div style={{zIndex: 3, display:'flex', gap: 5, alignItems: 'center', position:'absolute', top: 0, right: 10}}>
                            <p style={{color: 'black'}}>Close</p>
                            <ExpandMoreIcon style={{color: 'black'}} />
                          </div> */}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;