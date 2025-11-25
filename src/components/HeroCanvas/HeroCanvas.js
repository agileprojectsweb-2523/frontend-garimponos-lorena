'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import styles from './HeroCanvas.module.css';

function ParticleField({ color }) {
  const ref = useRef();
  
  // Gera 4000 partículas aleatórias
  const sphere = useMemo(() => {
    const count = 4000;
    const data = new Float32Array(count * 3);
    for(let i=0; i < count * 3; i++) {
      data[i] = (Math.random() - 0.5) * 4; // * 4 espalha mais as partículas
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    // Rotação suave e constante
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6} // Levemente mais sutil
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  const { theme } = useTheme();
  
  // Define a cor baseada no tema
  // Dark: Cyan Neon | Light: Roxo Escuro/Neon
  const particleColor = theme === 'dark' ? '#00E1FF' : '#8B00FF';

  return (
    <div className={styles.canvasContainer}>
      {/* gl={{ alpha: true }} garante fundo transparente */}
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }}>
        <ParticleField color={particleColor} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}