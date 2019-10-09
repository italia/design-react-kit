import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  multiline: PropTypes.bool,
  sublist: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const LinkList = props => {
  const { className, tag: Tag, multiline, header, sublist,  ...attributes } = props
  const wrapperClasses = classNames(
    multiline ? 'multiline' : false,
    'link-list-wrapper'
  )
  const classes = classNames(className, sublist ? 'link-sublist' : 'link-list')
  const headerClasses = classNames('no_toc',className)
  if (sublist) {
    return <ul {...attributes} className={classes} />
  }
  return (
    <Tag className={wrapperClasses}>
      <h3 {...attributes} className={headerClasses}>{header}</h3>
      <ul {...attributes} className={classes} />
    </Tag>
  )
}

LinkList.propTypes = propTypes
LinkList.defaultProps = defaultProps

export default LinkList
