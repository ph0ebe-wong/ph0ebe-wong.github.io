import React, {useEffect} from "react";
import './Styling/Home.css';
import { useLocation } from "react-router-dom";


//solar wind 
import solarwind_bg from './Assets/projects/solarwind/solarwind_bg.png'
import solarwind_scenario from './Assets/projects/solarwind/solarwind_scenario.png'
import solarwind_implementationPlan from './Assets/projects/solarwind/solarwind_implementationPlan.png'

import {useMediaQuery} from '@react-hook/media-query'




const SimulationPage = () =>{
    const isMobile = useMediaQuery('only screen and (max-width: 768px)');

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const solarwind_details = [
        {name: 'Scenario', image: solarwind_scenario, description: "The image outlines the key stages of the SolarWinds cyberattack from 2019 to 2021, starting with initial network breaches and leading to the deployment of Sunburst malware. It details the attack's discovery, subsequent security advisories, and the shutdown of the malware's infrastructure. This timeline effectively encapsulates the critical moments of a complex cybersecurity event."},
        {name: 'Implementation Plan', image: solarwind_implementationPlan, description: "The plan outlines a defense strategy against Password Attacks, Malware, and Code Injection, employing various specific measures for each. A Firewall VM with pfSense is designated to combat Code Injection threats, while the Security Server VM uses ModSecurity for Code Injection and Immuneet for Malware. Comprehensive protection is provided by Windows Security. Incident responses are managed through data backup and recovery with EaseUS ToDo and Restic. The Enhancement Server VM employs Splunk for system monitoring and analysis, enhancing network resilience. Defense mechanisms are color-coded by attack type, demonstrating a multi-layered security approach."},
        {name: 'RAT', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/threat_simulation.mp4', description: "I led the malware simulation aspect of the SolarWinds attack scenario. My approach involved the utilisation of Remote Access Trojans (RATs) to mimic the adversarial tactics and techniques observed during the 2020 incident. The video demonstrates how, on the attacker's virtual machine (VM), utilizing a Remote Access Trojan (RAT) becomes effective when the victim's VM executes an application compromised by the RAT. This breach enables the attacker's VM to discern the victim's IP address, paving the way for the execution of various malicious operations"},
        {name: 'Immunet', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/immunet.mp4', description: 'The first detection tool we employed is Immunet, which serves primarily as a malware detection system. As demonstrated in the video, upon launching the RAT application, it was promptly detected by Immunet and subsequently quarantined within the system.'},
        {name: 'Modsecurity DDOS', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/ddos.mp4', description: "In addition to malware detection, I have also integrated ModSecurity into our security measures, enabling us to explore a variety of use cases beyond just malware detection. One particular use case involved executing a denial-of-service (DoS) attack. For this, I utilized a Kali Linux virtual machine (VM) to launch the DoS attack. The impact of this attack, including relevant logs, was observable on both the victim's VM and within Splunk"},
        {name: 'Modsecurity Method Restriction', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/method+restriction.mp4', description: 'Furthermore, I executed a use case centered around method restriction. By selectively whitelisting essential methods, we aimed to enhance security measures and prevent unauthorized access or actions. These actions and their corresponding security decisions were meticulously logged in ModSecurity and Splunk, allowing for comprehensive monitoring and analysis of security protocols in place'},
        {name: 'ModSecurity Path Traversal', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/path+traversal.mp4', description: 'Lastly, I implemented a security measure against path traversal attacks, effectively preventing attackers from accessing or manipulating files outside of a specified directory. This defense mechanism, along with any attempts to breach it, was systematically logged in both ModSecurity and Splunk for detailed tracking and analysis.'},
        {name: 'Restic', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/restic+backup.mp4', description: 'I have implemented Restic for the purpose of backing up critical user information, ensuring data integrity and security'},
        {name: 'Splunk', video: 'https://portfolio-solarwind-simulation-videos.s3.ap-southeast-1.amazonaws.com/splunk.mp4', description: "Splunk serves as a comprehensive monitoring tool in our security framework. Each use case, including the method restriction and path traversal prevention efforts, has been meticulously logged within Splunk. This allows for real-time surveillance and detailed analysis of our system's security posture."},
    ]




    return (
        <>
            <div className='extension-container' />

            <div className="div-container" style={{alignItems: 'start', height: '80vh'}}>
                <div class='intro-container' style={{alignItems: 'start', flexDirection: 'column'}}>
                    
                    <div style={{width: '100%'}}>
                        {
                            isMobile ? (
                                <>
                                    <div className='project-banner-container' style={{height: 200}}>
                                        <img className='project-banner-container-img' src={solarwind_bg} />
                                        <div className='project-banner-container-black'  />
                                        <div className='project-banner-div'  style={{padding: 10, width: '100%'}}>
                                            <h2 className='project-banner-header' style={{fontSize: 20}}>Solarwind Attack Simulation</h2>
                                            <p className='project-banner-desc' style={{fontSize: 15}}>This project simulates the SolarWinds cyberattack by recreating its vulnerabilities in VMWare environments, implementing defence, monitoring, and backup systems to enhance security and ensure swift recovery</p>
                                        </div>
                                    </div>
                                    {solarwind_details.map((detail, index) => (
                                        <>
                                            {index % 2 === 0 && (
                                                <>
                                                    <div key={index} className="project-page-container" style={{flexDirection : 'column' }}>
            
                                                        <div className='project-page-img' style={{width : '100%'}} >
                                                            {
                                                                detail.image ? (
                                                                    
                                                                    detail.image2 ? (
                                                                        <>
                                                                            <img style={{width: '50%'}} src={detail.image}/>
                                                                            <img style={{width: '50%'}} src={detail.image2}/>
                                                                        </>
                                                                    ):(
                                                                        <img style={{width: '100%'}} src={detail.image}/>
                    
                                                                    )
                                                                ):(
                                                                    <video width="100%" controls muted >
                                                                        <source src={detail.video} type="video/mp4"/>
                                                                    </video>
                                                                )
                                                            }    
                                                        </div>
                                                            
                                                            <div className='project-page-description' style={{width : '100%' }} >
                                                                <p className='project-page-description-text' style={{fontSize: 15}} >
                                                                    {detail.description}
                                                                </p>
                                                            </div>
                                                    </div>
                                                </>
                                            )}
                                            {index % 2 !== 0 && (
                                                <>
                                                    <div key={index} className="project-page-container" style={{flexDirection : 'column-reverse'}} >
                                                        <div className='project-page-description' style={{width : '100%' }} >
                                                            <p className='project-page-description-text' style={{fontSize: 15}} >
                                                                {detail.description}
                                                            </p>
                                                        </div>
                                                        <div className='project-page-img' style={{width : '100%'}} >
                                                            {
                                                                detail.image ? (
                                                                    
                                                                    detail.image2 ? (
                                                                        <>
                                                                            <img style={{width: '50%'}} src={detail.image}/>
                                                                            <img style={{width: '50%'}} src={detail.image2}/>
                                                                        </>
                                                                    ):(
                                                                        <img style={{width: '100%'}} src={detail.image}/>
                    
                                                                    )
                                                                ):(
                                                                    <video width="100%" controls muted >
                                                                        <source src={detail.video} type="video/mp4"/>
                                                                    </video>
                                                                )
                                                            }
                                                        </div>
                                                        
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ))}</>
                                ):(
                                    <>
                                        <div className='project-banner-container' >
                                            <img className='project-banner-container-img' src={solarwind_bg} />
                                            <div className='project-banner-container-black'  />
                                            <div className='project-banner-div' >
                                                <h2 className='project-banner-header' >Solarwind Attack Simulation</h2>
                                                <p className='project-banner-desc'>This project simulates the SolarWinds cyberattack by recreating its vulnerabilities in VMWare environments, implementing defence, monitoring, and backup systems to enhance security and ensure swift recovery</p>
                                            </div>
                                        </div>
                                        {solarwind_details.map((detail, index) => (
                                            <>
                                                {index % 2 === 0 && (
                                                    <>
                                                        <div key={index} className="project-page-container" style={{flexDirection :  'row' }}>
                
                                                        <div className='project-page-img' style={{width : '50%' }} >
                                                            {
                                                                detail.image ? (
                                                                    
                                                                    detail.image2 ? (
                                                                        <>
                                                                            <img style={{width: '50%'}} src={detail.image}/>
                                                                            <img style={{width: '50%'}} src={detail.image2}/>
                                                                        </>
                                                                    ):(
                                                                        <img style={{width: '90%'}} src={detail.image}/>
                    
                                                                    )
                                                                ):(
                                                                    <video width="90%" controls muted >
                                                                        <source src={detail.video} type="video/mp4"/>
                                                                    </video>
                                                                )
                                                            }
                                                        </div>
                                                            
                                                            <div className='project-page-description' style={{width :'50%' }} >
                                                                <p className='project-page-description-text' >
                                                                    {detail.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                                {index % 2 !== 0 && (
                                                    <>
                                                        <div key={index} className="project-page-container" style={{flexDirection : 'row' }} >
                                                            <div className='project-page-description' style={{width : '50%' }} >
                                                                <p className='project-page-description-text' style={{textAlign:'right'}}  >
                                                                    {detail.description}
                                                                </p>
                                                            </div>
                                                            <div className='project-page-img' style={{width :'50%' }} >
                                                                {
                                                                    detail.image ? (
                                                                        
                                                                        detail.image2 ? (
                                                                            <>
                                                                                <img style={{width: '50%'}} src={detail.image}/>
                                                                                <img style={{width: '50%'}} src={detail.image2}/>
                                                                            </>
                                                                        ):(
                                                                            <img style={{width: '90%'}} src={detail.image}/>
                        
                                                                        )
                                                                    ):(
                                                                        <video width="90%"  controls muted >
                                                                            <source src={detail.video} type="video/mp4"/>
                                                                        </video>
                                                                    )
                                                                }
                                                            </div>
                                                            
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        ))}</>
                                    )
                        }
                    </div>

                </div>
            </div>

        </>
    )


}
export default SimulationPage 