import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button } from "../../";

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool
};

const defaultProps = {
    tag: "div"
};

export default function Offcanvas(props, context) {
    const { className, tag: Tag, isOpen, onClose, ...attributes } = props;
    const classes = classNames(className, "navbar-collapsable", {
        expanded: isOpen,
        "d-block": isOpen
    });

    return (
        <div className={classes}>
            <div className="close-div" onClick={onClose}>
                <Button className="close-menu" color="">
                    <span className="it-close" />close
                </Button>
            </div>
            <div className="menu-wrapper">
                <Tag {...attributes} />
            </div>
        </div>
    );
}

Offcanvas.propTypes = propTypes;
Offcanvas.defaultProps = defaultProps;
