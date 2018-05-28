import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    active: PropTypes.bool,
    onToggle: PropTypes.func
};

const defaultProps = {
    tag: "div"
};

export default function AccordionBody(props, context) {
    const { className, tag: Tag, active, onToggle, ...attributes } = props;
    const classes = classNames("collapse", {
        show: active
    });
    const bodyClasses = classNames("collapse-body", className);

    return (
        <div className={classes}>
            <Tag {...attributes} className={bodyClasses} />
        </div>
    );
}

AccordionBody.propTypes = propTypes;
AccordionBody.defaultProps = defaultProps;
