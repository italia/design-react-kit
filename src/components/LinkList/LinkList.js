import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo */
  header: PropTypes.node,
  /** Classi aggiuntive da usare per il componente lista del LinkList */
  className: PropTypes.string,
  /** Classi aggiuntive da usare per il componente wrapper del LinkList */
  wrapperClassName: PropTypes.string,
  /** Quando è abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
  multiline: PropTypes.bool,
  sublist: PropTypes.bool,
  avatar: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const LinkList = props => {
  const {
    className,
    wrapperClassName,
    tag: Tag,
    multiline,
    header,
    sublist,
    avatar,
    ...attributes
  } = props
  const wrapperClasses = classNames(
    multiline ? 'multiline' : false,
    'link-list-wrapper',
    wrapperClassName
  )
  const classes = classNames(
    className,
    sublist ? 'link-sublist' : 'link-list',
    avatar && 'avatar-group'
  )

  if (sublist) {
    return (
      <>
        {header}
        <ul {...attributes} className={classes} />
      </>
    )
  }
  return (
    <Tag className={wrapperClasses}>
      {header}
      <ul {...attributes} className={classes} />
    </Tag>
  )
}

LinkList.propTypes = propTypes
LinkList.defaultProps = defaultProps

export default LinkList
