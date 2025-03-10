import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [mouse, setMouse] = useState([0, 0]);
  const [smoothedMouse, setSmoothedMouse] = useState([0, 0]);

  // Écoute du mouvement de la souris
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse([event.clientX / window.innerWidth, event.clientY / window.innerHeight]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Lissage de la position de la souris
  useEffect(() => {
    const lerpFactor = 0.1; // Le facteur de lissage, plus il est petit, plus l'effet est fluide.
    setSmoothedMouse((prevMouse) => [
      prevMouse[0] + (mouse[0] - prevMouse[0]) * lerpFactor,
      prevMouse[1] + (mouse[1] - prevMouse[1]) * lerpFactor,
    ]);
  }, [mouse]);

  // Mise à jour de la rotation des étoiles
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // Fonction pour calculer le décalage des étoiles en fonction de la souris
  const adjustedPositions = sphere.map((value, index) => {
    const [mouseX, mouseY] = smoothedMouse;
    const factor = 0.05; // Facteur d'intensité du décalage (plus petit pour un effet plus léger)
    if (index % 3 === 0) return value + (mouseX - 0.5) * factor; // X
    if (index % 3 === 1) return value + (mouseY - 0.5) * factor; // Y
    return value; // Z
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={adjustedPositions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
