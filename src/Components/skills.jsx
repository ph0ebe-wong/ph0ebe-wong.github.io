import React from "react";
import './Styling/Home.css';

const Skills = () => {
    const skills_list = [
        {'name': 'HTML', 'progress': '80'},
        {'name': 'CSS', 'progress': '75'},
        {'name': 'REACT', 'progress': '70'},
        {'name': 'Javascript', 'progress': '70'},
        {'name': 'Web Security', 'progress': '55'},
        {'name': 'Data Security', 'progress': '50'},
        {'name': 'EnCase', 'progress': '60'},
        {'name': 'Metasploit', 'progress': '55'},
        {'name': 'AWS Computing', 'progress': '40'},
        {'name': 'Python Programming', 'progress': '70'},
        {'name': 'Flask', 'progress': '75'},
        {'name': 'Structured Query Language', 'progress': '60'},
        {'name': 'Bootstrap', 'progress': '55'},
        {'name': 'Web Design', 'progress': '50'},
        {'name': 'Figma', 'progress': '60'},
        {'name': 'Premiere Pro', 'progress': '10'}
    ];

    return (
        <div className="skills-div">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h3 className="text-center">My Skills</h3>
                        <br />
                        {skills_list.map((skill, index) => (
                            <div key={index}>
                                <span>{skill.name}</span>
                                <div className="progress skill-bar">
                                    <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${skill.progress}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
