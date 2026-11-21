import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Icosahedron } from "@react-three/drei";

function GoggleRing() {
  const ringRef = useRef();
  const coreRef = useRef();

  useFrame((_, delta) => {
    if (ringRef.current) ringRef.current.rotation.x += delta * 0.18;
    if (ringRef.current) ringRef.current.rotation.y += delta * 0.22;
    if (coreRef.current) coreRef.current.rotation.y -= delta * 0.3;
  });

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={1.1}>
        <Torus ref={ringRef} args={[1.5, 0.16, 32, 100]}>
          <meshStandardMaterial
            color="#FFD23F"
            emissive="#E6B400"
            emissiveIntensity={0.35}
            metalness={0.6}
            roughness={0.25}
          />
        </Torus>
        <Icosahedron ref={coreRef} args={[0.85, 1]}>
          <MeshDistortMaterial
            color="#2E4374"
            speed={1.6}
            distort={0.35}
            metalness={0.4}
            roughness={0.2}
            emissive="#4C68A8"
            emissiveIntensity={0.25}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function GoggleScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#FFD23F" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#4C68A8" />
      <Suspense fallback={null}>
        <GoggleRing />
      </Suspense>
    </Canvas>
  );
}
