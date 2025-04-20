import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

const CameraController = ({ target = new THREE.Vector3(0, 0, 0) }) => {
    const { camera, pointer } = useThree()
    const initialPos = useRef(camera.position.clone())
  
    useFrame(() => {
      const strength = 10
  
      const offsetX = -pointer.x * strength
      const offsetY = pointer.y * strength
  
      const targetPos = new THREE.Vector3(
        initialPos.current.x + offsetX,
        initialPos.current.y + offsetY,
        initialPos.current.z
      )
  
      camera.position.lerp(targetPos, 0.05)
  
      camera.lookAt(target)
    })
  
    return null
  }
  
  export default CameraController