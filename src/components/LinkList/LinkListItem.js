import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    header: PropTypes.bool,
    divider: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.any,
    href: PropTypes.string,
    size: PropTypes.string,
};

const defaultProps = {
    tag: "a",
};

const handleDisabledOnClick = e => {
    e.preventDefault();
};

const LinkListItem = props => {
    let {
        className,
        active,
        disabled,
        header,
        divider,
        tag: Tag,
        href,
        size,
        ...attributes
    } = props;
    const classes = classNames(
        className,
        active ? "active" : false,
        disabled ? "disabled" : false,
        header ? "header" : false,
        divider ? "divider" : false,
        size ? size : false,
        "list-item"
    );

    // Prevent click event when disabled.
    if (disabled) {
        attributes.onClick = handleDisabledOnClick;
    }

    if (header) {
        Tag = "h3";
    } else if (divider) {
        Tag = "span";
    }

    return (
        <li>
            {(() => {
                if (header && href) {
                    return (
                        <Tag>
                            <a
                                href={href ? href : "#"}
                                {...attributes}
                                className={classes}
                            />
                        </Tag>
                    );
                }

                return (
                    <Tag
                        href={href ? href : "#"}
                        {...attributes}
                        className={classes}
                    />
                );
            })()}
        </li>
    );
};

LinkListItem.propTypes = propTypes;
LinkListItem.defaultProps = defaultProps;

export default LinkListItem;
