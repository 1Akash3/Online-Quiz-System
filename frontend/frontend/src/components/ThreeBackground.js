import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

function FloatingOrb({ position, color }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial emissive={color} color={color} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        zIndex: -1,
        height: "100vh",
        background: "#020617",
      }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} />

      {/* Floating glowing orbs */}
      <FloatingOrb position={[-2, 1, 0]} color="#00e5ff" />
      <FloatingOrb position={[2, -1, 0]} color="#00bcd4" />
      <FloatingOrb position={[1.5, 2, -1]} color="#4dd0e1" />
      <FloatingOrb position={[-1.5, -2, 1]} color="#26c6da" />

      {/* Star background */}
      <Stars radius={60} depth={50} count={2500} factor={4} fade />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}