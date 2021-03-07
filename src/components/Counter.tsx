import * as React from 'react'
import { useCount } from '../hooks'

const Counter: React.VFC = () => {
  const [count, countUp, countDown] = useCount()
  const [count10, countUp10, countDown10] = useCount(0, 10)
  return (
    <>
      <div>
        <h1>1ずつ上昇</h1>
        <p>{count}</p>
        <button onClick={countDown}>-</button>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h1>10ずつ上昇</h1>
        <p>{count10}</p>
        <button onClick={countDown10}>-</button>
        <button onClick={countUp10}>+</button>
      </div>
    </>
  )
}

export default Counter
