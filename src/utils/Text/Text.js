import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Text = props => {
    const {
        className,
        children,
        smooth,
        clean,
        size,
        weight,
        secondary,
        styleNormal,
        styleItalic,
        preformatted,
        ...rest
    } = props;

    const textClass = classnames(
        {
            'u-textSmooth': smooth,
            'u-textClean': clean,
            'u-textWeight-400': weight === 400,
            'u-textWeight-600': weight === 600,
            'u-textWeight-700': weight === 700,
            'u-textNormal': styleNormal,
            'u-textItalic': styleItalic,
            'u-textSecondary': secondary,
            'u-textPreformatted': preformatted,
            [`u-text-${size}`]:
                !!size &&
                ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(size) > -1,
            [`u-text-r-${size}`]:
                !!size &&
                ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs'].indexOf(size) > -1,
        },
        className,
    );

    if (typeof children === 'string') {
        return (
            <span className={textClass} {...rest}>
                {children}
            </span>
        );
    }
    if (Array.isArray(children)) {
        return (
            <div className={textClass} {...rest}>
                {children}
            </div>
        );
    }
    return React.cloneElement(children, {
        className: classnames(textClass, children.props.className),
        ...rest,
    });
};

Text.defaultProps = {
    smooth: false,
    clean: false,
    styleNormal: false,
    secondary: false,
    styleItalic: false,
    preformatted: false,
};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    smooth: PropTypes.bool,
    clean: PropTypes.bool,
    weight: PropTypes.oneOf([400, 600, 700]),
    styleNormal: PropTypes.bool,
    secondary: PropTypes.bool,
    styleItalic: PropTypes.bool,
    preformatted: PropTypes.bool,
    size: PropTypes.oneOf([
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
        'xxs',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
    ]),
};

export default Text;
