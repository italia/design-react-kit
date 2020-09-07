import classNames from 'classnames'
import { Util } from 'reactstrap'
const { mapToCssModules } = Util

function getFormControlClassInternal({ plaintext, staticInput, type, addon }) {
  const formControlClass = 'form-control'
  if (plaintext || staticInput) {
    return `${formControlClass}-plaintext`
  }
  if (type === 'file') {
    return `${formControlClass}-file`
  }
  if (['radio', 'checkbox'].indexOf(type) > -1) {
    if (addon) {
      return null
    }
  }
  return formControlClass
}

export function getFormControlClass(props, cssModule) {
  return mapToCssModules(getFormControlClassInternal(props), cssModule)
}

export function getInfoTextControlClass({ valid, invalid }, cssModule) {
  return mapToCssModules(
    classNames({
      'form-text text-muted': valid || invalid
    }),
    cssModule
  )
}

export function getTag({ tag, plaintext, staticInput, type }) {
  if (tag) {
    return tag
  }
  if (['radio', 'checkbox'].indexOf(type) > -1) {
    return 'input'
  }
  if ((plaintext, staticInput)) {
    return 'p'
  }
  return 'input'
}

export function getClasses(
  className,
  {
    isFocused,
    valid,
    invalid,
    bsSize,
    placeholder,
    value,
    label,
    infoText,
    normalized,
    inputPassword,
    formControlClass,
    infoTextControlClass
  },
  cssModule
) {
  const hasPlainCondition = placeholder || label || infoText
  const baseCondition = hasPlainCondition && !normalized && !inputPassword
  const passwordOnlyCondition =
    inputPassword && !hasPlainCondition && !normalized
  const normalizedOnlyCondition =
    normalized && !hasPlainCondition && !inputPassword

  const classes = mapToCssModules(
    classNames(
      className,
      {
        'is-invalid': invalid,
        'is-valid': valid,
        [`form-control-${bsSize}`]: bsSize
      },
      formControlClass
    ),
    cssModule
  )
  const wrapperClass = mapToCssModules(
    classNames(className, 'form-group'),
    cssModule
  )
  const infoTextClass = mapToCssModules(
    classNames(
      {
        'valid-feedback': valid,
        'invalid-feedback': invalid
      },
      infoTextControlClass
    ),
    cssModule
  )

  const inputClasses = mapToCssModules(
    classNames(
      classes,
      !baseCondition && {
        // we can model here only if stylings
        'form-control-plaintext': normalizedOnlyCondition,
        'form-control': passwordOnlyCondition,
        'input-password': passwordOnlyCondition,
        'focus--mouse': passwordOnlyCondition || normalizedOnlyCondition
      }
    ),
    cssModule
  )

  const activeClass = mapToCssModules(
    classNames({
      active: isFocused || placeholder || value
    }),
    cssModule
  )

  return {
    wrapperClass,
    inputClasses,
    activeClass,
    infoTextClass
  }
}
