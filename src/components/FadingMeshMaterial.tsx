import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FadingMeshMaterial = ({
  texture,
  delay = 0,
}: {
  texture: THREE.Texture
  delay?: number
}) => {
  const materialRef = useRef<THREE.MeshMatcapMaterial>(null)
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
    <meshMatcapMaterial 
      matcap={texture}
      ref={materialRef}
      transparent
      opacity={0}
    />
  )
}

export default FadingMeshMaterial