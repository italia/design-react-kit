import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: string,
  className: string
};

const defaultProps = {
  tag: 'a'
};

const CardTag = (props) => {
  const {className, tag: Tag, ...attributes} = props;
  const classes = classNames(className, 'card-tag');
  return (
    <Tag className={classes} {...attributes}/>
  );
};

CardTag.propTypes = propTypes;
CardTag.defaultProps = defaultProps;

export default CardTag;
