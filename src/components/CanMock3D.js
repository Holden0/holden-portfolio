"use client";

import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import { MathUtils, Vector3 } from 'three';

useGLTF.preload('/base-can-mockup03.glb');

function Can(props) {
  const { scene } = useGLTF('/base-can-mockup03.glb');
  const ref = useRef();
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.z = MathUtils.degToRad(-10);
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.y += 0.006;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[0, 0, 0]}
      onPointerDown={(e) => {
        e.stopPropagation();
        setIsDragging(true);
      }}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <Center>
        <primitive 
          ref={ref} 
          object={scene} 
          {...props} 
        />
      </Center>
    </group>
  );
}

export default function CanMock3D({ containerClassName }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  if (!isMounted) {
    return (
      <div className={containerClassName || ''} style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '500px',
        position: 'relative'
      }}></div>
    );
  }

  return (
    <div className={containerClassName || ''} style={{ 
      width: '100%', 
      height: '100%', 
      minHeight: '500px',
      position: 'relative',
      overflow: 'visible',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 25 }}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        shadows={false}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.2} />
          <directionalLight position={[-10, -5, -5]} intensity={0.2} color="#5c7db5" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.5}
            target={[0, 0, 0]}
            makeDefault
          />
          <Can 
            scale={1.1} 
            position={[0, 0, 0]} 
          />
          <Environment preset="warehouse" intensity={0.5} />
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
        opacity: '0.8',
        zIndex: 10
      }}>
        <span>Click and drag to rotate</span>
      </div>
    </div>
  );
}
