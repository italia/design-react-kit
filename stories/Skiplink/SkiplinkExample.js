import React, { useRef, useEffect } from 'react'
import { Skiplink, SkiplinkItem } from '../../src'

const SkiplinkExample = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // We focus the container here since it is hosted inside Storybook's iframe
    if (containerRef.current) {
      containerRef.current.focus()
    }
  }, [containerRef.current])

  return (
    <section tabIndex="-1" ref={containerRef}>
      <div id="#main" />
      <div id="#footer" />

      <Skiplink>
        <SkiplinkItem />
        <SkiplinkItem href="#main">Skip to main content</SkiplinkItem>
        <SkiplinkItem href="#footer">Skip to footer</SkiplinkItem>
      </Skiplink>
    </section>
  )
}

export default SkiplinkExample
