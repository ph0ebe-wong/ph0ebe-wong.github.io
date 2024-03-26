import React from "react";
import './Styling/Home.css';


const Contact = () =>{

    return (
        <>
            <div className="div-container ending-gradient" style={{alignItems: 'end', height: '40vh'}}>
                <div class='intro-container' style={{alignItems: 'center', flexDirection: 'column'}}>
                    <h2 className='header-title'>Get In Touch</h2>
                    <p className="ending-message" >Feel free to reach out, whether it's for questions, advice, or job opportunities. Looking forward to your message!</p>
                    <button style={{marginTop: 20, width: 250}} className="social-btn"><a href="mailto:phoebejywong@gmail.com" style={{color:'white', textDecoration: 'none'}}> Email Me</a></button>
                    <div className='extension-container' />
                </div>
            </div>
        </>
    )
}
export default Contact 