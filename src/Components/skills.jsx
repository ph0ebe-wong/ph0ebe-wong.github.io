import React, { useState, useEffect, useRef } from "react";
import './Styling/Home.css';


const Skills = () => {
    const skills_list = [
        {'name': 'HTML'},
        {'name': 'CSS'},
        {'name': 'REACT'},
        {'name': 'Javascript'},
        {'name': 'EnCase'},
        {'name': 'Metasploit'},
        {'name': 'AWS Computing'},
        {'name': 'Python Programming'},
        {'name': 'Flask'},
        {'name': 'Structured Query Language'},
        {'name': 'Bootstrap'},
        {'name': 'Web Design'},
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

    const [items, setItems] = useState([
        {
          title: 'Paris',
          num: '01',
          imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
        },
        {
          title: 'New York',
          num: '02',
          imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
        },
        {
          title: 'Tokyo',
          num: '03',
          imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
        },
        {
            title: 'Tokyo',
            num: '04',
            imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
          },
          {
            title: 'Tokyo',
            num: '05',
            imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
          },
          {
            title: 'Tokyo',
            num: '06',
            imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
          },
          {
            title: 'Tokyo',
            num: '07',
            imgSrc: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
          }
      ]);

  // States
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);

  // Constants
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  // Get Z Index
  const getZindex = (array, index) => array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));

  // Display Items
  const displayItems = (index, activeIndex) => {
    const zIndex = getZindex(items, activeIndex)[index];
    return {
      '--zIndex': zIndex,
      '--active': (index - activeIndex) / items.length,
    };
  };

  // Animate
  const animate = () => {
    const newProgress = Math.max(0, Math.min(progress, 100));
    const newActive = Math.round(newProgress / 100 * (items.length - 1));
    setActive(newActive);
};

  // Event Handlers
  const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel;
    if (wheelProgress < 0 && progress <= 0) {
      // Reset progress to 0 when scrolling up at the top
      setProgress(0);
    } else {
      // Normal behavior
      setProgress(prevProgress => Math.max(0, Math.min(prevProgress + wheelProgress, 100)));
    }
  };
  
  const handleMouseMove = e => {
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    if (!isDownRef.current) return;
    const mouseProgress = (x - startXRef.current) * speedDrag;
    setProgress(prevProgress => prevProgress + mouseProgress);
    startXRef.current = x;
  };

  const handleMouseDown = e => {
    isDownRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
  };

  const handleItemClick = index => {
    const newProgress = (index / (items.length - 1)) * 100;
    setProgress(newProgress);
    console.log(`Index: ${index}, Progress: ${newProgress}`);
};    

  // Effects
  useEffect(() => {
    animate();
  }, [progress, items.length]);

  useEffect(() => {
    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);    
  
    return () => {
      document.removeEventListener('mousewheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

      return (
        <div className="skills-div">
            <div style={{display:'flex', justifyContent:'center'}}>
            <button class="btn-cloud" href="#">Cloud Button</button>
                <div id="skills-container" data-animated>
                    <ul id="skills-list">
                        {skills_list.map((skill, index) => (
                          <>
                            <button className="skills-button" key={index} > {skill.name}
                                <div class="star-1">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-2">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-3">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-4">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-5">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-6">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
                                </div>
                            </button>
                            </>
                        ))}
                        {duplicatedSkills.map(skill => (
                            <button className="skills-button"  key={skill.key} aria-hidden={skill['aria-hidden']} > {skill.name}
                                <div class="star-1">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-2">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-3">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-4">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1"  ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-5">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
                                </div>
                                <div class="star-6">
                                    <svg viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" ><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
                                </div>
                            </button>
                        
                        ))}
                    </ul>
                </div>
            </div>

<div className="carousel">
    {items.map((item, index) => (
      <div
        key={index}
        className="carousel-item"
        onClick={() => handleItemClick(index)}
        style={displayItems(index, active)}
      >
        <div className="carousel-box">
          <div className="title">{item.title}</div>
          <div className="num">{item.num}</div>
          <img src={item.imgSrc} alt={item.title} />
        </div>
      </div>
    ))}
  </div>            </div>
    );
}

export default Skills;
