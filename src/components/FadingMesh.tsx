import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import FadingMeshMaterial from './FadingMeshMaterial'

const FadingMesh = ({
  geometry,
  position,
  rotation,
  scale,
  delay = 0,
}: {
  geometry: THREE.BufferGeometry
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  delay?: number
}) => {
  const matcap3Texture = useLoader(THREE.TextureLoader, '/matcaps/matcap.png')
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <FadingMeshMaterial texture={matcap3Texture} delay={delay} />
    </mesh>
  )
}

export default FadingMesh