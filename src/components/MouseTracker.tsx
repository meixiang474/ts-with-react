import React, {useState, useEffect} from 'react'
import useMousePosition from '../hooks/useMousePosition'

const MouseTracker: React.FC = props => {
  const positions = useMousePosition()
  return (
    <p>
      x: {positions.x}, y: {positions.y}
    </p>
  )
}

export default MouseTracker