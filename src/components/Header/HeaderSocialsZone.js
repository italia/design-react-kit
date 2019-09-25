import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
  className: PropTypes.string,
  /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
  label: PropTypes.string,
  /** Utilizzato per elencare i social da mostrare */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
const defaultProps = {}

const HeaderSocialsZone = ({ className, children, label, ...attributes }) => {
  const classes = classNames('it-socials d-none d-md-flex', className)
  return (
    <div className={classes} {...attributes}>
      {label && <span>{label}</span>}
      {children}
    </div>
  )
}

HeaderSocialsZone.propTypes = propTypes
HeaderSocialsZone.defaultProps = defaultProps
export default HeaderSocialsZone
