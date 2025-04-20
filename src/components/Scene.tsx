import { Center, Text3D } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import { useMemo, useRef } from "react";
import FadingMesh from "./FadingMesh";

const Scene = () => {
  // Fonts
  const mainFontPath = 'fonts/Chewy_Bubble_Regular.json'
  const jackpotFontPath = 'fonts/Jackpot_Regular.json'

  // Matcaps
  const matcapTexture = useLoader(THREE.TextureLoader, '/matcaps/matcap3.png')
  const matcap2Texture = useLoader(THREE.TextureLoader, '/matcaps/matcap4.png')

  const mainTextRef = useRef<THREE.Mesh>(null)
  const secondTextRef = useRef<THREE.Mesh>(null)

  const donutGeometry = useMemo(() => new THREE.TorusGeometry(0.3, 0.2, 32, 64), [])
  const donuts = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => {
      const position = [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
      ]
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ]
      const scale = Math.random() * 1.5
      return { key: i, position, rotation, scale }
    })
  }, [])

  const cubeGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), [])
  const cubes = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const position = [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35,
      ]
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ]
      const scale = Math.random()
      return { key: i, position, rotation, scale }
    })
  }, [])

  const coneGeometry = useMemo(() => new THREE.ConeGeometry(0.5, 1.5, 32), [])
  const cones = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const position = [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
      ]
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ]
      const scale = Math.random() * 1.5
      return { key: i, position, rotation, scale }
    })
  }, [])

  const icosahedroGeometry = useMemo(() => new THREE.IcosahedronGeometry(1, 0), [])
  const icosahedros = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const position = [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
      ]
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ]
      const scale = Math.random() * 1.5
      return { key: i, position, rotation, scale }
    })
  }, [])

  return (
          <>
            <Center front precise>
              <Text3D
                ref={mainTextRef}
                font={mainFontPath}
                size={1}
                height={0.5}
                curveSegments={10}
                bevelEnabled
                bevelThickness={0.05}
                bevelSize={0.03}
                bevelOffset={0}
                bevelSegments={5}
                position={[0, 1, 0]}
                rotation={[0, Math.PI, 0]}
                onClick={(e) => {
                  e.stopPropagation()
                  window.open('https://github.com/cpl121', '_blank')
                }}
              >
                CPL121.eth
                <meshMatcapMaterial matcap={matcap2Texture} />
              </Text3D>
              <Text3D
                ref={secondTextRef}
                font={jackpotFontPath}
                size={0.3}
                height={0.2}
                curveSegments={6}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.01}
                bevelOffset={0}
                bevelSegments={3}
                position={[1, 0, 0]}
                rotation={[0, Math.PI, 0]}
              >
                Digital Identity Rendered
                <meshMatcapMaterial matcap={matcapTexture} />
              </Text3D>
            </Center>
      
            {donuts.map(({ key, scale, position, rotation }) => (
              <FadingMesh
                key={key}
                geometry={donutGeometry}
                position={position as [number, number, number]}
                rotation={rotation as [number, number, number]}
                scale={[scale, scale, scale]}
                delay={8}
               />
            ))}
            {cubes.map(({ key, scale, position, rotation }) => (
              <FadingMesh
                key={key}
                geometry={cubeGeometry}
                position={position as [number, number, number]}
                rotation={rotation as [number, number, number]}
                scale={[scale, scale, scale]}
                delay={6}
              />
            ))}
            {cones.map(({ key, scale, position, rotation }) => (
              <FadingMesh
                key={key}
                geometry={coneGeometry}
                position={position as [number, number, number]}
                rotation={rotation as [number, number, number]}
                scale={[scale, scale, scale]}
                delay={4}
              />
            ))}
            {icosahedros.map(({ key, scale, position, rotation }) => (
              <FadingMesh
                key={key}
                geometry={icosahedroGeometry}
                position={position as [number, number, number]}
                rotation={rotation as [number, number, number]}
                scale={[scale, scale, scale]}
                delay={10}
              />
            ))}
        </>
  )
}

export default Scene