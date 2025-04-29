"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { Group } from "three";
import * as THREE from "three";

interface AvatarProps {
  url: string;
}

function Avatar({ url }: AvatarProps) {
  const { scene, animations } = useGLTF(url) as unknown as {
    scene: Group;
    animations: THREE.AnimationClip[];
  };
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Idle"]) {
      actions["Idle"].reset().fadeIn(0.5).play();
    }
    return () => {
      actions && actions["Idle"]?.fadeOut(0.5);
    };
  }, [actions]);

  return <primitive object={scene} scale={1.5} />;
}

export default function AvatarPage() {
  return (
    <Canvas style={{ height: "100%", background: "#1a1a1a" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      <Avatar url="https://models.readyplayer.me/680e0512a4d963314f109bd5.glb" />
    </Canvas>
  );
}
