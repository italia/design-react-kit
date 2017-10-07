import React from 'react';
import PropTypes from 'prop-types';

// import 'design-web-toolkit/build/build.css';

const Button = ({children, ...rest}) => {
    return (<button className="Button" {...rest}>{children}</button>);
};

Button.propTypes = {
    type: PropTypes.oneOf(['info', 'danger']),
    children: PropTypes.node,
};

export default Button;
