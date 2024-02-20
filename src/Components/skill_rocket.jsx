import React from "react";
import './Styling/skills.css';

const SkillRocket = () =>{

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

const certificate_list =[
    {'name': 'Computer Hacking Forensic Investigator'}, 
    {'name': 'Google Data Analytics'}
]

const acheivement_list = [
    {"name": "Edusave Secondary 1"}, 
    {"name": "Edusave Secondary 4"}, 
    {"name": "Director List Year 2 Semester 1"}, 
]



return (
    <>
        <div className="skill-computer skill-computer-left">
            <h2 className="skill-computer-title"> {"> Skills"}  </h2>
            <div className="skill-list-div">
                {skills_list.map((skill, index) => (
                    <span className="skill-list-span"  key={index}>
                        {">> " + skill.name}
                    </span>
                ))}
            </div>                
        </div>
        <div className="skill-computer skill-computer-right" >
            <h2 className="skill-computer-title" > {"> Certificates"}  </h2>
            <div className="skill-list-div" >
                {certificate_list.map((skill, index) => (
                    <span className="skill-list-span"  key={index}>
                        {">> " + skill.name}
                    </span>
                ))}
            </div>
            <h2 className="skill-computer-title skill-achievement" > {"> Achievements"}  </h2>
            <div className="skill-list-div" >
                {acheivement_list.map((skill, index) => (
                    <span className="skill-list-span"  key={index}>
                        {">> " + skill.name}
                    </span>
                ))}
            </div>               
        </div>

    </>
)
}
export default SkillRocket 