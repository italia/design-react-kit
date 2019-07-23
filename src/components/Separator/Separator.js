import React from 'react'

import PropTypes from 'prop-types'
import classname from 'classnames'

const Separator = ({ colorTop, colorBottom, classNames }) => {
  const styleTop = classname('Separator-room', colorTop, classNames.top)
  const styleBottom = classname(
    'Separator Separator--up',
    colorBottom,
    classNames.bottom
  )
  return (
    <div>
      <hr className={styleTop} />
      <hr className={styleBottom} />
    </div>
  )
}

Separator.propTypes = {
  colorTop: PropTypes.string,
  colorBottom: PropTypes.string,
  classNames: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string
  })
}

Separator.defaultProps = {
  classNames: {}
}

export default Separator
