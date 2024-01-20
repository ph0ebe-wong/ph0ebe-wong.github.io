import React, {useState, useRef} from "react";
import './Styling/asteriods.css'
import asteriods from './Assets/asteriods.png'

const Asteriods = ({social}) =>{

const [isHover, setHover] = useState(false)

const handleMouseEnter = () => setHover(true);
const handleMouseLeave = () => setHover(false);

return (
    <>
    <div className="asteroids-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    { isHover &&
            <div className="mo-fire front" style={{zIndex:11}}>
                <svg 
                id="Layer_1" 
                x="0px" 
                y="0px"
                width="125px" 
                height="189.864px" 
                viewBox="0 0 125 189.864" 
                enableBackground="new 0 0 125 189.864"
                >
                <path className="flame-main" fill="#0B3D91" d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465 c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54 c6.806,41.899,16.831,45.301,6.088,53.985"/>
                    <path className="flame-main three" fill="#1F51FF" d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79 C95.354,106.319,99.92,114.108,99.92,101.754z"/>
                    <path className="flame-main four" fill="#0B3D91" d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041 S134.387,164.603,103.143,105.917z"/>
                    <path className="flame-main five" fill="#1F51FF" d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"/>
                    <path className="flame one" fill="#0B3D91" d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"/>
                    <path className="flame two" fill="#0B3D91" d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"/>
                </svg>
        </div>    
        }
    <div className="about-me-asteriod" >
        <img src={asteriods} className="asteroids-img"  style={{width: '50px', height:'50px'}} />
        {isHover && <span style={{zIndex:3, color: 'white'}}>{social}</span>}
    </div>
    {
        isHover &&
            <div className="mo-fire back">
                <svg 
                id="Layer_1" 
                x="0px" 
                y="0px"
                width="125px" 
                height="189.864px" 
                viewBox="0 0 125 189.864" 
                enableBackground="new 0 0 125 189.864"
                >
                <path className="flame-main" fill="#0B3D91" d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465 c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54 c6.806,41.899,16.831,45.301,6.088,53.985"/>
                <path className="flame-main one" fill="#0077FF" d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123 c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"/>
                <path className="flame-main two" fill="#87CEEB" d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998 C84.858,184.21,125.705,150.905,81.657,79.192z"/>
                    <path className="flame-main three" fill="#1F51FF" d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79 C95.354,106.319,99.92,114.108,99.92,101.754z"/>
                    <path className="flame-main four" fill="#0B3D91" d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041 S134.387,164.603,103.143,105.917z"/>
                    <path className="flame-main five" fill="#1F51FF" d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"/>
                    <path className="flame" fill="#0B3D91" d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"/>
                    <path className="flame one" fill="#0B3D91" d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"/>
                    <path className="flame two" fill="#0B3D91" d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"/>
                </svg>
        </div>    
        }
  </div>
  </>
)
}
export default Asteriods 

