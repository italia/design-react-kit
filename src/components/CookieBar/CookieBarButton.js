import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    link: PropTypes.string,
}

const defaultProps = {
    tag: 'button',
    link: '#'
}

class CookieBarButton extends React.Component{
    render(){
        const { tag: Tag, ...attributes} = this.props
        const activeClass = classNames("cookiebar-btn")
        return (
            <Tag href = {this.props.link} 
              className = {activeClass} {...attributes}/>
            
        )
    }

}

CookieBarButton.propTypes = propTypes
CookieBarButton.defaultProps = defaultProps

export default CookieBarButton