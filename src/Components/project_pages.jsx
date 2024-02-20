import React from "react";
import './Styling/ProjectPages.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from "react-router-dom";

const ProjectPages = () =>{
    const slides = 5
    const navigate = useNavigate()
    const location = useLocation();
    const { project } = location.state;

    console.log(project)
    return (
        <>
        
            <div className="project-pages-container" >
                <CloseIcon onClick={()=>navigate(-1)} style={{position:'absolute', right: 20, top: 20, width: 35, height: 35}}/>
                <div className="project-pages-indiv-container project-pages-media-container"  >
                    <h2 className="project-pages-title" > ** Media **</h2>
                    <img className="project-pages-media" src={project.backgroundImage} />
                    <div className="project-pages-media-button-div"  >
                        {Array.from({ length: slides }, (_, index) => (
                            <button className="project-pages-media-button" key={index} style={{ width: `${95 / slides}%`, }}>{index + 1}</button>

                        ))}
                    </div>
                    <div className="project-pages-media-desc-container"  >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    
                    
                </div>
                <div class="hologram-base"></div>
                {/* <div style={{
                        height: '70vh',
                        width: '700px',
                        position: 'absolute',
                        overflow: 'hidden'
                        
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundImage: 'linear-gradient(0deg, rgba(209,224,229,0.2) 0%, rgba(21,151,203,0.2) 35%, rgba(21,99,172,0.2) 100%)',
                                clipPath: 'polygon(0 0, 100% 0, 65% 100%, 35% 100%)'
                            }}></div>
                        </div> */}




            </div>
        </>
    )
}
export default ProjectPages 