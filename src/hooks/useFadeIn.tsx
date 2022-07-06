import { useRef, useEffect, useCallback } from 'react'

const useFadeIn = <T extends HTMLElement>(duration = 1, delay = 0) => {
  const element = useRef<T>(null)

  const fadeIn = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element

      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all'
        current.style.transitionDuration = `${duration}ms`
        current.style.transitionTimingFunction = 'ease-in'
        current.style.transitionDelay = `${delay}ms`
        current.style.opacity = '1'
        current.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [duration, delay],
  )

  useEffect(() => {
    let observer: IntersectionObserver

    if (element.current) {
      observer = new IntersectionObserver(fadeIn, { threshold: 0.7 })
      observer.observe(element.current)
    }

    return () => observer && observer.disconnect()
  }, [fadeIn])

  return {
    ref: element,
    style: { opacity: 0, transform: 'translate3d(0, 10%, 0)' },
  }
}

export default useFadeIn
