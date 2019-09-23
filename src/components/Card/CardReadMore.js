import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from "../Icon/Icon";

const propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string
};

const defaultTypes = {
  iconName: "it-arrow-right"
};

const CardReadMore = props => {
  const { className, text, iconName, ...attributes } = props;
  const classes = classNames(className, "read-more");
  return (
    <a className={classes} {...attributes}>
      <span className="text">{text}</span>
      <Icon icon={iconName} />
    </a>
  );
};

CardReadMore.propTypes = propTypes;
CardReadMore.defaultTypes = defaultTypes;

export default CardReadMore;
