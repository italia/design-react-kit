import React from 'react';
import {node, string} from 'prop-types';

const propTypes = {
    children: node,
    date: string
};

const CardTagsHeader = (props) => {
  const {date, children, ...attributes} = props;
  return (
    <div className="head-tags" {...attributes}>
        {children}
        {date && <span className="data">{date}</span>}
    </div>
  );
};

CardTagsHeader.propTypes = propTypes;

export default CardTagsHeader;
