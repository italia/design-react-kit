import React from 'react';
import {bool} from 'prop-types';
import classNames from 'classnames';
import {Card as CardBase} from 'reactstrap';

const propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...CardBase.propTypes,
  teaser: bool,
  spacing: bool
}

const Card = (props) => {
  const {
    teaser, spacing, ...attributes
  } = props
  const wrapperClasses = classNames('card-wrapper', {
    'card-space': spacing,
    'card-teaser-wrapper': teaser
  });
  const cardClasses = classNames(attributes.className, {
    'card-teaser': teaser,
  });

  return (
    <div className={wrapperClasses}>
      <CardBase {...attributes} className={cardClasses}/>
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = CardBase.defaultProps;

export default Card;
