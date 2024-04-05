import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Styling/Home.css';

// matchable
import matchable_ImageValidation from './Assets/projects/matchable/matchable_ImageValidation.png';
import matchable_adminUsers from './Assets/projects/matchable/matchable_adminUsers.png';
import matchable_backup from './Assets/projects/matchable/matchable_backup.png';
import matchable_bg from './Assets/projects/matchable/matchable_cover.png';
import matchable_editProfiilePrompt from './Assets/projects/matchable/matchable_editProfiilePrompt.png';
import matchable_home from './Assets/projects/matchable/matchable_home.png';
import matchable_login from './Assets/projects/matchable/matchable_login.png';
import matchable_otp from './Assets/projects/matchable/matchable_otp.png';
import matchable_restoreDeletedUsers from './Assets/projects/matchable/matchable_restoreDeletedUsers.png';
import matchable_signup from './Assets/projects/matchable/matchable_signup.png';
import matchable_updatePassword from './Assets/projects/matchable/matchable_updatePassword.png';
import matchable_updatePasswordM2 from './Assets/projects/matchable/matchable_updatePasswordM2.png';

import { useMediaQuery } from '@react-hook/media-query';



const MatchablePage = () =>{

    // const project = useParams()

    const isMobile = useMediaQuery('only screen and (max-width: 768px)');

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const matchable_details = [
        {name: 'Home', image: matchable_home, description: 'Welcome to Matchable, where love knows no bounds! Our online dating platform is meticulously designed to connect you with potential partners from around the globe, ensuring that distance is never a barrier to finding your perfect match. '},
        {name: 'Login', image: matchable_login, description: "To enhance the security of our users' data, we have implemented multiple measures including Google Recaptcha, security questions, one-time passwords (OTP), and image validation. Furthermore, user information is securely stored in SQL databases."},
        {name: 'Signup', image: matchable_signup, image2: matchable_otp, description: 'During the sign-up process, users are required to answer security questions and enter the one-time password (OTP) sent to their email.'},
        {name: 'Image Validation', image: matchable_ImageValidation, description: 'If users attempt to upload their passport or credit card information as their profile picture, such submissions will be automatically rejected.'},
        {name: 'Edit Profile', image: matchable_editProfiilePrompt, description: 'Additionally, when users edit their profile, they must enter their password for verification purposes.'},
        {name: 'Update Password', image: matchable_updatePassword, description: 'The first method for changing the password involves verification via email and a JWT (JSON Web Token) token.'},
        {name: 'Update Password Method 2', image: matchable_updatePasswordM2, description: 'The second method for password change involves filling out a security questions form. The responses will be verified against the information provided during the sign-up process and stored in the database.'},
        {name: 'Admin Users', image: matchable_adminUsers, description: "Administrators have the capability to monitor their users' activities and maintain an updated record of user interactions within the system. Additionally, they are equipped with the authority to delete user accounts in cases of policy violations, ensuring the integrity and security of the platform."},
        {name: 'Restore Deleted Users', image: matchable_restoreDeletedUsers, description: 'In the event that an administrator mistakenly deletes the wrong user account, we have provisions in place to restore the account back to its original state, ensuring no critical user data or access is permanently lost due to administrative errors.'},
        {name: 'Backup', image: matchable_backup, description: 'Administrators possess the ability to execute daily full backups, ensuring that all data, including user information, application data, and system configurations, is comprehensively duplicated for recovery and security purposes.'},
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
                                        <img className='project-banner-container-img' src={matchable_bg} />
                                        <div className='project-banner-container-black'  />
                                        <div className='project-banner-div'  style={{padding: 10, width: '100%'}}>
                                            <h2 className='project-banner-header' style={{fontSize: 20}}>Matchable</h2>
                                            <p className='project-banner-desc' style={{fontSize: 15}}>An online dating website allows user to conveniently connect with potential partners regardless of distance, with emphasis on ensuring data and website security</p>
                                        </div>
                                    </div>
                                    {matchable_details.map((detail, index) => (
                                        <>
                                            {index % 2 === 0 && (
                                                <>
                                                    <div key={index} className="project-page-container" style={{flexDirection : 'column' }}>
            
                                                        <div className='project-page-img' style={{width : '100%'}} >
                                                            {
                                                                detail.image2 ? (
                                                                    <>
                                                                        <img style={{width: '50%'}} src={detail.image}/>
                                                                        <img style={{width: '50%'}} src={detail.image2}/>
                                                                    </>
                                                                ):(
                                                                    <img style={{width: '100%'}} src={detail.image}/>
                
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
                                                                detail.image2 ? (
                                                                    <>
                                                                        <img style={{width: '50%'}} src={detail.image}/>
                                                                        <img style={{width: '50%'}} src={detail.image2}/>
                                                                    </>
                                                                ):(
                                                                    <img style={{width: '100%'}} src={detail.image}/>
            
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
                                            <img className='project-banner-container-img' src={matchable_bg} />
                                            <div className='project-banner-container-black'  />
                                            <div className='project-banner-div' >
                                                <h2 className='project-banner-header' >Matchable</h2>
                                                <p className='project-banner-desc'>An online dating website allows user to conveniently connect with potential partners regardless of distance, with emphasis on ensuring data and website security</p>
                                            </div>
                                        </div>
                                        {matchable_details.map((detail, index) => (
                                            <>
                                                {index % 2 === 0 && (
                                                    <>
                                                        <div key={index} className="project-page-container" style={{flexDirection :  'row' }}>
                
                                                        <div className='project-page-img' style={{width : '50%' }} >
                                                            {
                                                                detail.image2 ? (
                                                                    <>
                                                                        <img style={{width: '50%'}} src={detail.image}/>
                                                                        <img style={{width: '50%'}} src={detail.image2}/>
                                                                    </>
                                                                ):(
                                                                    <img style={{width: '100%'}} src={detail.image}/>
                
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
                                                                    detail.image2 ? (
                                                                        <>
                                                                            <img style={{width: '50%'}} src={detail.image}/>
                                                                            <img style={{width: '50%'}} src={detail.image2}/>
                                                                        </>
                                                                    ):(
                                                                        <img style={{width: '100%'}} src={detail.image}/>
                
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
export default MatchablePage 