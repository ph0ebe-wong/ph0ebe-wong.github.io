import React, { useState } from "react";
import './Styling/Home.css';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import {useMediaQuery} from '@react-hook/media-query'


const Achievement = () =>{

    const qualification_list = [
        {'name': 'GCE O Levels'}, 
        {'name': 'Diploma of Cybersecurity and Digital Forensic'}
    ]

    const certificate_list =[
        {'name': 'Computer Hacking Forensic Investigator (CHFI)'}, 
        {'name': 'Google Data Analytics'},
        {'name': 'Certified Ethical Hacker (CEH)'}
    ]
    
    const acheivement_list = [
        {"name": "Edusave Secondary 1"}, 
        {"name": "Edusave Secondary 4"}, 
        {"name": "Director List Year 2 Semester 1"}, 
    ]

    const tabs = ['Qualifications', 'Awards', 'Certificates']

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const renderList = () => {
        switch (activeTab) {
            case 'Qualifications':
                return qualification_list.map((item, index) => (
                    <div key={index} className='tab-list'>
                        < AnchorOutlinedIcon />
                        {item.name}
                    </div>
                ));
            case 'Certificates':
                return certificate_list.map((item, index) => (
                    <div key={index} className='tab-list'>
                        < AutoAwesomeOutlinedIcon />
                        {item.name}
                    </div>
                ));
            case 'Awards':
                return acheivement_list.map((item, index) => (
                    <div key={index} className='tab-list'>
                        < FingerprintOutlinedIcon />
                        {item.name}
                    </div>
                ));
            default:
                return null;
        }
    };

    const isMobile = useMediaQuery('only screen and (max-width: 768px)');

    return (
        <>
            <div className="div-container" style={{alignItems: 'start', height: '60vh'}}>
                <div class='intro-container' style={{alignItems: 'start', flexDirection: 'column'}}>
                    <div className="header-container">
                        <h2 className='header-title'>Achievements</h2>
                        <div className='header-divider'/>
                    </div>

                    {isMobile ? (
                        <div className='tab-container' style={{flexDirection: 'column'}}>
                            <div className='tab-mobile-menu'>
                                {tabs.map((tab, index) => (
                                    <div key={index} 
                                        className={`tab-indiv-container ${activeTab === tab ? 'active-tab' : ''}`} 
                                        style={{width: '200px', textAlign: 'center', }}
                                        onClick={() => setActiveTab(tab)}>
                                        <p style={{padding: '15px 30px' }}>{tab}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{marginTop: 40}}>
                                {renderList()}
                            </div>
                            
                        </div>
                    ):(
                        <div className='tab-container'>
                            <div style={{width: '25%'}}>
                                <div className='tab-menu'>
                                    {tabs.map((tab, index) => (
                                        <div key={index} 
                                            className={`tab-indiv-container ${activeTab === tab ? 'active-tab' : ''}`} 
                                            onClick={() => setActiveTab(tab)}>
                                            <p>{tab}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ marginLeft: 60}}>
                                {renderList()}
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}
export default Achievement 