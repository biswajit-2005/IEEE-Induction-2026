import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

function VantaBirdsBg() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // 🔥 THIS IS THE MOST IMPORTANT LINE
    window.THREE = THREE;

    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x0b1c2d,
        color1: 0x4fc3f7,
        color2: 0x81d4fa,
        birdSize: 1.2,
        wingSpan: 20,
        speedLimit: 4,
        separation: 50,
        alignment: 40,
        cohesion: 40,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 -z-10"
    />
  );
}

export default VantaBirdsBg;

