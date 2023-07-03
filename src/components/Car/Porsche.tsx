import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { useLayoutEffect } from "react";

function Porsche(props: any) {
    const { scene, nodes, materials } = useGLTF("/car.glb");
    useLayoutEffect(() => {
        Object.values(nodes).forEach((node: any) => node.isMesh && (node.receiveShadow = node.castShadow = true));
        applyProps(materials.rubber, { color: "gray", roughness: 0.6, roughnessMap: null, normalScale: [4, 4] });
        applyProps(materials.window, { color: "black", roughness: 0, clearcoat: 0.1 });
        applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 });
        applyProps(materials.paint, { envMapIntensity: 2, roughness: 0.45, metalness: 0.8, color: "yellow" });
    }, [nodes, materials]);
    return <primitive object={scene} {...props} />;
}
export default Porsche;
