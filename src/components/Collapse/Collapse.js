import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Collapse as CollapseBase } from 'reactstrap'

const propTypes = {
  ...CollapseBase.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  className: PropTypes.string,
  header: PropTypes.bool
};

const Collapse = ({header, className, ...attributes}) => {
  const classes = classNames(className, {
    'link-list-wrapper': header
  });
  return <CollapseBase className={classes} {...attributes} />;
};

Collapse.propTypes = propTypes;
Collapse.defaultProps = CollapseBase.defaultProps;
export default Collapse;
