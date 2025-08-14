
import { useState, useCallback, useRef } from 'react'

interface UseCountUpProps {
  end: number
  duration?: number
  start?: number
  decimals?: number
}

export const useCountUp = ({ end, duration = 1500, start = 0, decimals = 0 }: UseCountUpProps) => {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)
  const hasAnimated = useRef(false)

  const startAnimation = useCallback(() => {
    if (isAnimating || hasAnimated.current) return
    hasAnimated.current = true;
    setIsAnimating(true)
    const startTime = performance.now()
    const startValue = start
    const endValue = end

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Optimized easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOutCubic

      setCount(Number(currentValue.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, start, decimals, isAnimating])

  return { count, startAnimation, isAnimating }
}