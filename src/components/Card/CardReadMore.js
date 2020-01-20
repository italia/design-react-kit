import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'
import tagPropType from 'reactstrap/src/utils'

const propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  tag: tagPropType
}

const defaultProps = {
  tag: 'a',
  iconName: 'it-arrow-right'
}

const CardReadMore = props => {
  const { className, text, iconName, tag: Tag, href, ...attributes } = props
  const classes = classNames(className, 'read-more')
  return (
    <Tag className={classes} href={href} {...attributes}>
      <span className="text">{text}</span>
      {iconName && <Icon icon={iconName} />}
    </Tag>
  )
}

CardReadMore.propTypes = propTypes
CardReadMore.defaultProps = defaultProps

export default CardReadMore
