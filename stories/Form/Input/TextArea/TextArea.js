import React, { useState } from 'react'
import { Input } from '../../../../src'

export const TextAreaClassic = () => {
  const [isFocused, setFocus] = useState(false)
  const toggleFocusLabel = () => setFocus(true)
  const toggleBlurLabel = e => {
    if (e.target.value === '') {
      setFocus({
        isFocused: !isFocused
      })
    }
  }

  return (
    <div className="form-group">
      <Input
        type="textarea"
        className={isFocused ? 'focus--mouse' : ''}
        onFocus={toggleFocusLabel}
        onBlur={toggleBlurLabel}
        id="exampleFormControlTextarea1"
        rows="3"
        label="Esempio di area di testo"
      />
    </div>
  )
}

export const TextAreaPlaceholder = () => {
  const [isFocused, setFocus] = useState(false)
  const toggleFocusLabel = () => setFocus(true)
  const toggleBlurLabel = e => {
    if (e.target.value === '') {
      setFocus({
        isFocused: !isFocused
      })
    }
  }

  return (
    <div className="form-group">
      <Input
        type="textarea"
        className={isFocused ? 'focus--mouse' : ''}
        onFocus={toggleFocusLabel}
        onBlur={toggleBlurLabel}
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Testo di esempio"
        label="Esempio di area di testo"
      />
    </div>
  )
}
