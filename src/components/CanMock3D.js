"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';

function Can(props) {
  const { scene } = useGLTF('/base-can-mockup1.glb');
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}


export default function CanMock3D({ containerClassName }) {
  return (
    <div className={containerClassName || ''} style={{ width: '100%', height: '100%', minHeight: '500px' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="studio" intensity={0.5} contactShadow={false}>
            <Can scale={1} position={[0, 0, 0]} />
          </Stage>
          <Environment preset="studio" />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={false}
            autoRotateSpeed={1}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(69, 81, 108, 0.7)',
        color: 'white',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.8rem',
        display: 'flex',
        gap: '10px',
        opacity: '0.8'
      }}>
        <span>Click and drag to rotate</span>
        <span>•</span>
        <span>Scroll to zoom</span>
      </div>
    </div>
  );
}
