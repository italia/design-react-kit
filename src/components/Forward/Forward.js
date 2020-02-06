import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button as ButtonBase } from 'reactstrap'

const propTypes = {
    ...ButtonBase.propTypes,
    scrollToRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
}

const Forward = ({
    className,
    scrollToRef,
    ...attributes
}) => {
    const classes = classNames(className, 'forward-scroll')
    return (
        <ButtonBase
            className={classes}
            onClick={() => scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            {...attributes}
        />
    )
}

Forward.propTypes = propTypes
export default Forward