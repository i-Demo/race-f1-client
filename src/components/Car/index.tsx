import * as THREE from "three";
import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment } from "@react-three/drei";
import Porsche from "./Porsche";
import LightFormers from "./LightFormers";

export default function Car() {
    const [degraded, degrade] = useState(false);
    return (
        <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
            <ambientLight intensity={0.5} />
            <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
            <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
                <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
            </AccumulativeShadows>
            {/** PerfMon will detect performance issues */}
            <PerformanceMonitor onDecline={() => degrade(true)} />
            {/* Renders contents "live" into a HDRI environment (scene.environment). */}
            <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
                <LightFormers />
            </Environment>
            <CameraRig />
        </Canvas>
    );
}

function CameraRig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
        const t = state.clock.elapsedTime;
        state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
}
