import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
   
}

const defaultProps = {
    tag: 'div',
}

const AvatarDropdownContainer = (props) => {
    const { className, tag:Tag, wrapperClassName, ...attributes } = props
    const wrapperClasses = classNames('avatar avatar-dropdown size-sm', wrapperClassName)
    return (
        <Tag className={wrapperClasses}>
            <ul {...attributes} className={listClasses}></ul>
        </Tag>
    )
}

AvatarDropdownContainer.propTypes=propTypes
AvatarDropdownContainer.defaultProps=defaultProps
export default AvatarDropdownContainer