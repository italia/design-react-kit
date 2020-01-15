import { Component } from 'react'

export default class ToolkitFontLoader extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const WebFont = require('webfontloader')
      WebFont.load({
        custom: {
          families: [
            'Titillium Web:300,400,600,700:latin-ext',
            'Lora:400,700:latin-ext',
            'Roboto Mono:400,700:latin-ext'
          ]
        }
      })
    }
  }

  render() {
    return null
  }
}
