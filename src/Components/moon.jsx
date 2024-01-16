import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import "./Styling/Moon.css"; 

// The Moon component
const Moon = () => {
  const ref = useRef();
  // Replace these URLs with the actual paths to your texture and displacement map files
  const texture = useLoader(TextureLoader, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg");
  const displacementMap = useLoader(TextureLoader, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg");

  // Animation for the moon
  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 10;
    ref.current.rotation.x += delta / 20;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial 
        map={texture} 
        displacementMap={displacementMap} 
        displacementScale={0.06}
      />
    </mesh>
  );
};

const MoonCanvas = () => {
  return (
    <div className="moon-container" >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default MoonCanvas;
