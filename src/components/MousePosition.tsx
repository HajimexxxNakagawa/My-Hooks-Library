import * as React from 'react'
import { useMousePosition } from '../hooks'

const MousePosition: React.VFC = () => {
  const { x, y } = useMousePosition(50)
  return (
    <div>
      Pos: {x}, {y}
    </div>
  )
}

export default MousePosition
