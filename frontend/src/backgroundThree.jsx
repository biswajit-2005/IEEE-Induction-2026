import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function IEEEThree() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ensure correct layering
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.zIndex = "0";
    renderer.domElement.style.pointerEvents = "none";

    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const COUNT = 700;
    const positions = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00aaff, // IEEE blue
      size: 0.05,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation
    let frameId;
    const animate = () => {
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup (SAFE)
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Wrapper only controls layering — nothing else
  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

