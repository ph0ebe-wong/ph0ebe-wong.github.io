import React, { useState, useEffect, useRef } from "react";
import './Styling/Home.css';
import Experience from "./experience";


const Skills = () => {
    const skills_list = [
        {'name': 'HTML'},
        {'name': 'CSS'},
        {'name': 'REACT'},
        {'name': 'Javascript'},
        {'name': 'EnCase'},
        {'name': 'Metasploit'},
        {'name': 'AWS Cloud'},
        {'name': 'Python'},
        {'name': 'Flask'},
        {'name': 'MySQL'},
        {'name': 'Bootstrap'},
        {'name': 'UI/UX'},
        {'name': 'Figma'},
        {'name': 'Premiere Pro'}
    ];

    const [duplicatedSkills, setDuplicatedSkills] = useState([]);

    useEffect(() => {
        const duplicateSkills = skills_list.map((skill, index) => ({
            ...skill,
            key: `duplicate-${index}`, 
            'aria-hidden': true
        }));
        setDuplicatedSkills(duplicateSkills);
    }, []);


      return (
        <div className="skills-div">
          <div style={{display:'flex', justifyContent:'center'}}>
            <div id="skills-container" data-animated>
                <ul id="skills-list">
                  {skills_list.map((skill, index) => (
                    <>
                      <button key={index}  class="cloud-btn">
                        <div class="cloud-left"> </div>
                        <span class="cloud-text">{skill.name}</span>
                        <div class="cloud-right"> </div>
                      </button>
                      </>
                    ))}
                    {duplicatedSkills.map(skill => (
                      <button  key={skill.key} aria-hidden={skill['aria-hidden']} class="cloud-btn">
                        <div class="cloud-left"> </div>
                        <span class="cloud-text">{skill.name}</span>
                        <div class="cloud-right"> </div>
                      </button>
                    ))}
                </ul>
            </div>
            
          </div>
          <Experience />
        </div>
    );
}

export default Skills;
