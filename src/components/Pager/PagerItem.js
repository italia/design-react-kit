import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PagerItem = ({
    children,
    className,
    linkable,
    href,
    onClick,
    responsive,
    ...rest
}) => {
    const style = classnames(
        'u-block',
        {
            'u-textClean': linkable,
        },
        className
    );
    const wrapperStyle = classnames('Grid-cell u-textCenter', {
        'u-hidden u-md-inlineBlock u-lg-inlineBlock': responsive,
    });
    const link = (
        <a href={href} className={style} onClick={onClick} {...rest}>
            {children}
        </a>
    );
    const spanTag = (
        <span className={style} {...rest}>
            {children}
        </span>
    );
    const inner = linkable ? link : spanTag;

    return (
        <li className={wrapperStyle} aria-hidden={`${!linkable}`}>
            {inner}
        </li>
    );
};

PagerItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    linkable: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    responsive: PropTypes.bool,
};

PagerItem.defaultProps = {
    linkable: true,
    href: '#',
};

export default PagerItem;
