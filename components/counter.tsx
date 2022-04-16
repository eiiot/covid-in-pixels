import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  covidDeaths: number | null
  gridRef: any | null
}

const Counter = (props: CounterProps) => {
  const { covidDeaths, gridRef } = props

  const [scrollOffset, setScrollOffset] = useState(0)
  const [count, setCount] = useState('0')

  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (gridRef.current && covidDeaths && counterRef.current) {
      const grid = gridRef.current
      const { top: svgTop, height: svgHeight } = grid.getBoundingClientRect()
      const fixedYVal = window.pageYOffset + svgTop - window.innerHeight
      if (scrollOffset > fixedYVal && scrollOffset < fixedYVal + svgHeight) {
        // set the count to the progress through the height of the thing, and add commas to the number, e.g. 1,000
        setCount(
          Math.floor(
            ((scrollOffset - fixedYVal) / svgHeight) * covidDeaths
          ).toLocaleString('en-US')
        )
      }

      if (
        scrollOffset > fixedYVal + 24 &&
        scrollOffset < fixedYVal + svgHeight
      ) {
        counterRef.current.style.bottom = '12px' // if the grid is in the viewport, display the counter
        counterRef.current.style.opacity = '100%'
      } else if (scrollOffset - fixedYVal < fixedYVal) {
        setCount('0')
        counterRef.current.style.opacity = '0%'
      } else {
        setCount((Math.round(covidDeaths / 100) * 100).toLocaleString('en-US'))
        counterRef.current.style.bottom =
          scrollOffset - (fixedYVal + svgHeight) + 'px'
      }
    }
  }, [scrollOffset, covidDeaths])

  return (
    <div
      className="fixed w-full text-center text-lg transition-opacity duration-300 md:left-0 md:mx-4 md:w-auto md:translate-x-0"
      style={{ opacity: 0 }}
      ref={counterRef}
    >
      {count}
    </div>
  )
}

export default Counter
