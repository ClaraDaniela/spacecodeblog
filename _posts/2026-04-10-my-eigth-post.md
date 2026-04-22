---
title: 'Simulando órbitas en 3D con JavaScript'
description: 'Cómo crear un sistema planetario simple en 3D usando React y Three.js.'
date: '2026-04-11'
modified_date: '2026-04-11'
image: /assets/images/posts/orbitas.png
---


En este post vamos a construir una simulación 3D de un sistema planetario usando JavaScript.  
La idea no es replicar la física real con precisión, sino entender cómo generar movimiento orbital de forma simple y visual.

---

## Librerías que vamos a usar

Para trabajar en 3D en el navegador, existen varias opciones:

- **Three.js** → motor 3D base  
- **@react-three/fiber** → integración de Three.js con React  
- **@react-three/drei** → utilidades listas (controles, luces, etc.)

Estas herramientas permiten crear escenas 3D sin trabajar directamente con WebGL.

---

## Idea base

Lo que se necesita saber:

- Tener conocimientos de programación en React js
- un radio (distancia al centro)
- una velocidad angular
- funciones trigonométricas (`sin` y `cos`)

---
Primero hay que instalar la libreria

`npm install three @react-three/fiber @react-three/drei`

## Componente de planeta

Creamos un componente reutilizable:

```tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

type PlanetProps = {
  radius: number;
  speed: number;
  size: number;
  color: string;
};
function Planet({ radius, speed, size, color }: PlanetProps) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(0);

  useFrame(() => {
    angle.current += speed;

    if (!ref.current) return;

    ref.current.position.x = Math.cos(angle.current) * radius;
    ref.current.position.z = Math.sin(angle.current) * radius;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function OrbitScene() {
  return (
    <Canvas camera={{ position: [0, 10, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} />

      {/* Sol */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      {/* Planetas */}
      <Planet radius={4} speed={0.02} size={0.4} color="cyan" />
      <Planet radius={6} speed={0.015} size={0.5} color="orange" />
      <Planet radius={8} speed={0.01} size={0.6} color="lightblue" />

      <OrbitControls />
    </Canvas>
  );
}



{/*Y si saben un poco de react, entonces sabran que lo pueden importar y 
mostrarlo en su aplicación de esta manera
<OrbitScene />*/}

## Simulación 3D que realice: