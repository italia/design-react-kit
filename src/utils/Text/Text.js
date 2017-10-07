import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Text = props => {
    const {
        className,
        children,
        smooth,
        clean,
        weight,
        normal,
        secondary,
        italic,
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
            'u-textNormal': normal && !italic,
            'u-textItalic': italic,
            'u-textSecondary': secondary,
            'u-textPreformatted': preformatted,
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
    normal: false,
    secondary: false,
    italic: false,
    preformatted: false,
};

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    smooth: PropTypes.bool,
    clean: PropTypes.bool,
    weight: PropTypes.oneOf([400, 600, 700]),
    normal: PropTypes.bool,
    secondary: PropTypes.bool,
    italic: PropTypes.bool,
    preformatted: PropTypes.bool,
};

export default Text;
