import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';

export function DollarSign() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={3}
        height={0.4}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        $
        <meshStandardMaterial
          color="#4ade80"
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Center>
  );
}