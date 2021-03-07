import { useCallback, useState } from 'react'

// カウントのみを扱うuseState Hook。カウントと、カウントアップ/ダウンの関数をそれぞれ返す。
export function useCount(
  initialState = 0,
  lev = 1
): [number, () => void, () => void] {
  const [count, setcount] = useState(initialState)
  const countUp = useCallback(() => setcount(count + lev), [count])
  const countDown = useCallback(() => setcount(count - lev), [count])

  return [count, countUp, countDown]
}
