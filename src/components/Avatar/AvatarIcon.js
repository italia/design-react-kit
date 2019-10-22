import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

const defaultProps = {
    tag: 'div',
    anchor: 'a',
    link: '#'
}

const AvatarIcon = (props) => {
    const {className, tag:Tag, anchor:Anchor, size, href, link, type, ...attributes } = props
    const typeClass = classNames({[`avatar ${type} ${size}`]:true})
    if(href)
    return <Anchor {...attributes} className={typeClass} href={link}/>
    return (
        <Tag {...attributes} className={typeClass} />
    )
}

AvatarIcon.propTypes = propTypes
AvatarIcon.defaultProps = defaultProps
export default AvatarIcon