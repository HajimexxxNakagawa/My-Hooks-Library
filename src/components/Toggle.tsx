import * as React from 'react'
import { useToggle } from '../hooks'

const Toggle: React.VFC = () => {
  const [isOpen, setIsOpen] = useToggle(false)
  return (
    <div>
      <button onClick={setIsOpen}>Toggle!</button>
      {isOpen && <p>Hello!</p>}
    </div>
  )
}

export default Toggle
