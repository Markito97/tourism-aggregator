import { useState, useEffect } from 'react'

interface IDimensions {
  width: number
  height: number
}

function getWindowDimensions(): IDimensions {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions(): IDimensions {
  const [windowDimensions, setWindowDimesions] = useState<IDimensions>(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimesions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return windowDimensions
}
