import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Indica se l'elemento è attivo o no */
  active: PropTypes.bool,
  /** Indica se l'elemento è disabilitato o no */
  disabled: PropTypes.bool,
  /** Indica se l'elemento è un titolo. */
  header: PropTypes.bool,
  /** Indica se l'elemento è un divisore */
  divider: PropTypes.bool,
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className: PropTypes.any,
  /** Indica il link a cui l'elemento deve puntare. */
  href: PropTypes.string,
  /** Indica la taglia/grandezza dell'elemento */
  size: PropTypes.string
}

const defaultProps = {
  tag: 'a'
}

const handleDisabledOnClick = e => {
  e.preventDefault()
}

const LinkListItem = ({
  className,
  active,
  disabled,
  header,
  divider,
  href,
  size,
  tag: Tag,
  ...attributes
}) => {
  const classes = classNames(
    className,
    {
      active,
      disabled,
      header,
      divider,
      size
    },
    'list-item'
  )

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick
  }

  if (header) {
    Tag = 'h3'
  } else if (divider) {
    Tag = 'span'
  }

  if (header && href) {
    return (
      <li>
        <Tag>
          <a href={href || '#'} {...attributes} className={classes} />
        </Tag>
      </li>
    )
  }

  attributes.href = href

  return (
    <li>
      <Tag {...attributes} className={classes} />
    </li>
  )
}

LinkListItem.propTypes = propTypes
LinkListItem.defaultProps = defaultProps

export default LinkListItem
