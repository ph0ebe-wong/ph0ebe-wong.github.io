import React from "react";
import './Styling/Home.css';


const Skills = () =>{


    const skills_list = [
        {'name': 'HTML', 'type': 'Languages and Databases', 'img': 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png' },
        {'name': 'CSS', 'type': 'Languages and Databases', 'img': 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'},
        {'name': 'REACT', 'type': 'Framework', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
        {'name': 'Javascript', 'type': 'Languages and Databases', 'img': 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png'},
        {'name': 'EnCase', 'type': 'Tools', 'img': 'https://vectorseek.com/wp-content/uploads/2023/10/Encase-Logo-Vector.svg-.png'},
        {'name': 'Metasploit', 'type': 'Tools', 'img': 'https://banner2.cleanpng.com/20180524/egt/kisspng-metasploit-project-penetration-test-security-hacke-5b072f9ad4d962.7481310415271975948718.jpg'},
        {'name': 'AWS Cloud', 'type': 'Tools', 'img': 'https://logolook.net/wp-content/uploads/2023/09/Amazon-Web-Services-Logo.png'},
        {'name': 'Python', 'type': 'Languages and Databases', 'img': 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg'},
        {'name': 'Flask', 'type': 'Framework', 'img': 'https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png'},
        {'name': 'MySQL', 'type': 'Languages and Databases', 'img': 'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png'},
        {'name': 'Bootstrap', 'type': 'Framework', 'img': 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png'},
        {'name': 'Figma', 'type': 'Tools', 'img': 'https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png'},
        {'name': 'Premiere Pro', 'type': 'Tools', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png'}
    ];
    
    const skillTypes = [...new Set(skills_list.map(skill => skill.type))];

    return (
        <>
            <div className="div-container" style={{alignItems: 'start', height: '100%'}}>
                <div class='intro-container' style={{alignItems: 'start', flexDirection: 'column'}}>
                    <div className="header-container">
                        <h2 className='header-title'>Skills</h2>
                        <div className='header-divider'/>
                    </div>

                    {skillTypes.map((type, index) => (
                        <div className='skill-container' key={index}>
                            <h3 className="skill-header">{type}</h3>
                            <div className='indiv-skill-container'>
                                {skills_list.filter(skill => skill.type === type).map((filteredSkill, index) => (
                                    <div key={index} className="skill-card">
                                        <img src={filteredSkill.img} alt={filteredSkill.name}/>
                                        {filteredSkill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='extension-container' />
                </div>
            </div>
        </>
    )
}
export default Skills 