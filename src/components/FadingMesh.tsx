import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

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
  color?: string
}) => {
  const matcap3Texture = useLoader(THREE.TextureLoader, '/matcaps/matcap.png')

  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)
  const startTime = useRef<number | null>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (startTime.current === null && t > delay) {
      startTime.current = t
    }

    if (startTime.current !== null && materialRef.current) {
      const elapsed = t - startTime.current
      const opacity = THREE.MathUtils.clamp(elapsed / 1, 0, 1)
      materialRef.current.opacity = opacity
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshMatcapMaterial 
        matcap={matcap3Texture}
        ref={materialRef}
        transparent
        opacity={0}
      />
    </mesh>
  )
}

export default FadingMesh