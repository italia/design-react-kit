import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  multiline: PropTypes.bool,
  sublist: PropTypes.bool,
  header: PropTypes.element,
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
  if (sublist) {
    return <ul {...attributes} className={classes} />
  }
  if (header) {
    return (
      <Tag className={wrapperClasses}>
        {header}
        <ul {...attributes} className={classes} />
      </Tag>
    )
  }
  return (
    <Tag className={wrapperClasses}>
      <ul {...attributes} className={classes} />
    </Tag>
  )
}

LinkList.propTypes = propTypes
LinkList.defaultProps = defaultProps

export default LinkList
