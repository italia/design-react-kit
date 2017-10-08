import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TimelineContent from './TimelineContent';

const Timeline = ({children, title, background, color, ...rest}) => {
    const pointClassname = classnames(
        'Timeline-point-content',
        background,
        color,
    );

    return (
        <div className="Timeline u-layout-prose u-layoutCenter" {...rest}>
            <div className="Timeline-point">
                <div className={pointClassname}>{title}</div>
            </div>
            {React.Children.only(children)}
        </div>
    );
};

Timeline.defaultProps = {
    background: 'u-background-95',
    color: 'u-color-white',
    children: <TimelineContent />,
};

Timeline.propTypes = {
    children: PropTypes.node.isRequired,
    // children: PropTypes.oneOfType([TimelineContent]).isRequired,
    title: PropTypes.node.isRequired,
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Timeline;
