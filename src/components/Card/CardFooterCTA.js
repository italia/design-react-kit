import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    className: string
};

const CardFooterCTA = (props) => {
  const {className, ...attributes} = props;
  const classes = classNames(className, 'it-card-footer');
  return (
    <div className={classes} {...attributes}/>
  );
};

CardFooterCTA.propTypes = propTypes;

export default CardFooterCTA;
