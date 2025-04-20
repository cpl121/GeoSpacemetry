import { CameraController, Scene } from "@/components";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-hidden">
        <Canvas camera={{ position: [0, 0, -15], fov: 60 }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <CameraController />
          <Suspense fallback={null}>
              <Scene />
          </Suspense>
        </Canvas>
      </main>
    </div>
  );
}
