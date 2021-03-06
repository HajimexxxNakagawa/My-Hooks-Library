import { useCallback, useState } from 'react'

// カウントのみを扱うuseState Hook。カウントと、カウントアップ/ダウンの関数をそれぞれ返す。
export function useCount(initialState = 0): [number, () => void, () => void] {
  const [count, setcount] = useState(initialState)
  const countUp = useCallback(() => setcount(count + 1), [count])
  const countDown = useCallback(() => setcount(count - 1), [count])

  return [count, countUp, countDown]
}
