import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import StandardNotification from './StandardNotification'
import NotificationWithIcon from './NotificationWithIcon'

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    isIcon : PropTypes.bool
}

const Example = () => (
    <div>
        <StandardNotification/>
        <NotificationWithIcon/>
    </div>
)
export default Example