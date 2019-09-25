import React from 'react'
import { Skiplink, SkiplinkItem } from '../../src'

class SkipLinkExample extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount() {
    // We focus the container here since it is hosted inside Storybook's iframe
    const container = this.container.current
    container && container.focus()
  }

  render() {
    return (
      <section tabIndex="-1" ref={this.container}>
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
}

export default SkipLinkExample
