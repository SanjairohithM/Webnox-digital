"use client"
import React, { useState, useEffect, Component } from 'react'
import Spline from '@splinetool/react-spline'

class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Spline Runtime Error caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <main className="w-[550px] h-[550px]" />
    }
    return this.props.children
  }
}

export default function Robot() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Filter out non-critical Spline runtime console error overlay in dev mode
    const originalConsoleError = console.error
    console.error = (...args) => {
      if (args[0] && (args[0] === 'Missing property' || (typeof args[0] === 'string' && args[0].includes('Missing property')))) {
        return
      }
      originalConsoleError.apply(console, args)
    }

    return () => {
      console.error = originalConsoleError
    }
  }, [])

  if (!isMounted) return <main className="w-[550px] h-[550px]" />

  return (
    <SplineErrorBoundary fallback={<main className="w-[550px] h-[550px]" />}>
      <main className="w-[550px] h-[550px]">
        <Spline 
          scene="https://prod.spline.design/73-OWdPCJQNMZSim/scene.splinecode"
          onMouseDown={(e) => e.preventDefault()}
          style={{ pointerEvents: 'none' }}
        />
      </main>
    </SplineErrorBoundary>
  )
}

