import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
   
}

const defaultProps = {
    tag: 'div',
}

const AvatarListContainer = (props) => {
    const { className, tag:Tag, ...attributes } = props
    const wrapperClasses = classNames('link-list-wrapper')
    const listClasses = classNames(className,'link-list avatar-group')
    return (
        <Tag className={wrapperClasses}>
            <ul {...attributes} className={listClasses}></ul>
        </Tag>
    )
}


AvatarListContainer.propTypes=propTypes
AvatarListContainer.defaultProps=defaultProps
export default AvatarListContainer