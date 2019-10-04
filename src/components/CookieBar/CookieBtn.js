import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '../../index'

const CookieBtn = props => {
    return (
        <span>
            <Button color="link">{props.buttonName}</Button>
        </span>      
    )
}
CookieBtn.propTypes = {
    buttonName: PropTypes.node
}

export default CookieBtn