import React from 'react';
import PropTypes from 'prop-types';

const TimelineContent = ({children, color, background, ...rest}) => (
    <div className={`Timeline-content ${color}`} {...rest}>
        <div
            className={`Timeline-arrow Icon-drop-down ${background.replace(
                'background',
                'color',
            )}`}
        />
        <div
            className={`u-borderShadow-xs u-padding-r-all u-borderRadius-xs ${background}`}>
            {children}
        </div>
    </div>
);

TimelineContent.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    background: PropTypes.string,
};

export default TimelineContent;
