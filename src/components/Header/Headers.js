import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
    shadow: PropTypes.bool,
    /** Classi addizionali per il componente Headers */
    className: PropTypes.string
};

const defaultProps = {
    shadow: false
};

const Headers = ({ className, shadow, ...attributes }) => {
    const classes = classNames("it-header-wrapper", {
        'it-shadow': shadow
    }, className);
    return <div className={classes} {...attributes}></div>;
}

Headers.propTypes = propTypes;
Headers.defaultProps = defaultProps;
export default Headers;