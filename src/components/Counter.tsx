import * as React from 'react'
import { useCount } from '../hooks'

const Counter: React.VFC = () => {
  const [count, countUp, countDown] = useCount(1)
  return (
    <div>
      <p>{count}</p>
      <button onClick={countDown}>-</button>
      <button onClick={countUp}>+</button>
    </div>
  )
}

export default Counter
