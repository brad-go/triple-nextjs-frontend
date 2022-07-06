import { useEffect, useCallback, useState } from 'react'

import { easeOutExpo } from 'utils/easing'

const useCount = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState<number>(start)

  const frameRate = 1000 / 120
  const totalFrame = Math.floor(duration / frameRate)

  const increaseCount = useCallback(() => {
    let countNumber = start

    const counter = setInterval(() => {
      let progress = ++countNumber / totalFrame
      progress = Math.round(easeOutExpo(progress, start, end, 1))
      setCount(progress)

      if (progress === end) {
        clearInterval(counter)
      }
    }, frameRate)
  }, [start, end, frameRate, totalFrame])

  useEffect(() => {
    increaseCount()
  }, [increaseCount])

  return count
}

export default useCount
