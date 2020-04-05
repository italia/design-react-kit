import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FormGroup, Label } from 'reactstrap'
import Input from '../Input/Input'
import Icon from '../Icon/Icon'
import { noop } from '../utils'

const propTypes = {
  /** La lista di id per ciascun elemento intero del Rating. La lista deve essere ordinata dal rating 1 al rating 5.  */
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Il campo "label" è impostato di default su "Valuta ${n} stelle su 5", ma può essere personalizzato con questa funzione che riceve il numero input come argomento `function (n: number) => string`. */
  labelTemplate: PropTypes.func,
  /** Da utilizzare in caso legenda principale del Rating. Passare una componente React da mostrare come legenda (all'interno del tag `<legend>`). It is possible also to show the legend of screen readers only */
  legend: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.string,
    PropTypes.shape({ content: PropTypes.string, srOnly: PropTypes.bool })
  ]),
  /** Mostra la leggenda solo ai dispositivi screen reader */

  /** Parametro name da dare all'input */
  name: PropTypes.string,
  /** Classi aggiuntive da usare per il componente wrapper del Rating */
  wrapperClassName: PropTypes.string,
  /** Classi aggiuntive da usare per ciascun elemento all'interno del componente Rating */
  className: PropTypes.string,
  /** Callback chiamata ad ogni cambio di valore di rating. Il nuovo valore ed il name verranno passati: `function (n, name) => void` */
  onChangeRating: PropTypes.func,
  /** Rende il componente read-only */
  readOnly: PropTypes.bool,
  /** Il valore corrente del componente */
  value: PropTypes.number
}

const defaultProps = {
  onChangeRating: (value, name) => {},
  labelTemplate: value => `Valuta ${value} stelle su 5`
}

const Rating = props => {
  const {
    className,
    inputs,
    labelTemplate,
    legend,
    name,
    onChangeRating,
    readOnly,
    value,
    wrapperClassName,
    ...attributes
  } = props

  // Input data
  // On the DOM we have to go from 5 to 1
  const safeInputs = (inputs || []).reverse()

  // Fields
  const labelFn = labelTemplate

  const onChange = readOnly ? onChangeRating : noop

  const wrapperClasses = classNames(wrapperClassName, {
    'rating-read-only': readOnly,
    'rating-label': legend
  })
  const fieldClasses = classNames(className)
  const extraFieldAttrs = readOnly ? { ariaHidden: 'true' } : {}

  // Legend
  const isLegendString = typeof legend === 'string'
  const isLegendObject =
    legend != null &&
    typeof legend === 'object' &&
    typeof legend.content === 'string'

  const legendClass = classNames({
    'sr-only': isLegendObject && legend.srOnly
  })

  const legendText = isLegendObject ? legend.content : legend

  const legendContent =
    isLegendObject || isLegendString ? (
      <span className={legendClass}>{legendText}</span>
    ) : (
      legend
    )

  return (
    <FormGroup
      cssModule={{ 'form-group': 'rating' }}
      tag="fieldset"
      className={wrapperClasses}
      {...attributes}>
      {legend && <legend>{legendContent}</legend>}
      {safeInputs.map((id, i) => {
        const currentValue = 5 - i

        return (
          <>
            <Input
              type="radio"
              id={id}
              name={name}
              value={currentValue}
              cssModule={{ 'form-control': ' ' }}
              className={fieldClasses}
              onClick={() => onChange(currentValue, name)}
              checked={value === currentValue}
              disabled={readOnly}
              {...extraFieldAttrs}
            />
            <Label className="full" for={id}>
              <Icon icon="it-star-full" size="sm" />
              <span className="sr-only">{labelFn(5 - i)}</span>
            </Label>
          </>
        )
      })}
    </FormGroup>
  )
}

Rating.propTypes = propTypes
Rating.defaultProps = defaultProps

export default Rating
