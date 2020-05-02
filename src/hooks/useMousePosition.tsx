import React, {useState, useEffect} from 'react'

const useMousePosition = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({
        x: e.clientX,
        y: e.clientY
      })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePosition