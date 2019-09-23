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
  size: PropTypes.string
};

const defaultProps = {
  tag: "a"
};

const handleDisabledOnClick = e => {
  e.preventDefault();
};

const LinkListItem = props => {
  const {
    className,
    active,
    disabled,
    header,
    divider,
    href,
    size,
    ...attributes
  } = props;
  let { tag: Tag } = props;
  const classes = classNames(
    className,
    active ? "active" : false,
    disabled ? "disabled" : false,
    header ? "header" : false,
    divider ? "divider" : false,
    size || false,
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
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                href={href || "#"}
                {...attributes}
                className={classes}
              />
            </Tag>
          );
        }

        return <Tag href={href || "#"} {...attributes} className={classes} />;
      })()}
    </li>
  );
};

LinkListItem.propTypes = propTypes;
LinkListItem.defaultProps = defaultProps;

export default LinkListItem;
