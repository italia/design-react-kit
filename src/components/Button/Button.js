import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({style, shadow, round, children, link, ...rest}) => {
    const classes = classnames({
        Button: true,
        'Button--default': !style || style === 'default',
        'Button--info': style === 'info',
        'Button--danger': style === 'danger',
        'Button--round': round,
        'Button--shadow': shadow,
        'u-text-r-xs': true,
    });

    let ButtonTag = link ? 'a' : 'button';

    // let Element = props => <button type="button" {...props} />;
    // if (link) {
    //     Element = function elementA(props) {
    //         return <a role="button" {...props} />;
    //     };
    // }
    return (
        <ButtonTag
            type={!link ? 'button' : undefined}
            role={link ? 'button' : undefined}
            className={classes}
            {...rest}>
            {children}
        </ButtonTag>
    );
};

Button.defaultProps = {
    style: 'default',
    shadow: false,
    round: false,
    link: false,
};

Button.propTypes = {
    style: PropTypes.oneOf(['info', 'danger', 'default']),
    shadow: PropTypes.bool,
    round: PropTypes.bool,
    link: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
