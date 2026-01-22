import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";

function RotatingCylinder() {
  const textures = useTexture([
    "/cs.png",
    "/cas.png",
    "/comsoc.png",
    "/wie.png",
  ]);

  const cyl = useRef();
  const [index, setIndex] = useState(0);

  useFrame(({ clock }) => {
    if (!cyl.current) return;

    const t = clock.getElapsedTime();
    cyl.current.rotation.y = t * 0.5;

    const newIndex = Math.floor((t * 0.5) % textures.length);
    if (newIndex !== index) setIndex(newIndex);
  });

  return (
    <mesh ref={cyl}>
      <cylinderGeometry args={[1, 1, 1.5, 64, 1, true]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        map={textures[index]}
      />
    </mesh>
  );
}

export default function IEEEThree() {
  return (
    <div className="w-[240px] h-[240px] mx-auto mt-10">
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <Suspense fallback={null}>
          <RotatingCylinder />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
