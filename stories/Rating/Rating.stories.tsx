import React from 'react';

import { Rating } from '../../src';

// import RatingBaseDoc from './docs/RatingBase.md'
// import RatingConLabelDoc from './docs/RatingConLabel.md'
// import RatingReadOnlyDoc from './docs/RatingReadOnly.md'

export const RatingBase = ({ legend, value }) => {
  return (
    <Rating
      legend={legend}
      value={value}
      inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']}
      name='ratingA'
    />
  );
};

export const RatingConLabel = () => (
  <Rating
    value={4}
    legend={
      <>
        <span className='sr-only'>Valutazione</span> <span>4 stelle</span>{' '}
        <span className='sr-only'>su 5</span>
      </>
    }
    inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}
    name='ratingB'
  />
);

export const RatingReadOnly = () => (
  <Rating
    value={4}
    readOnly
    legend={{ content: 'Valutazione 4 stelle su 5', srOnly: true }}
    inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
    name='ratingC'
  />
);

export default {
  title: 'Componenti/Rating'
};

RatingBase.args = {
  value: null,
  legend: 'Rating'
};
RatingBase.argTypes = {
  value: {
    control: {
      type: 'range',
      options: { min: 1, max: 5, step: 1 }
    }
  }
};

RatingConLabel.story = {
  name: 'Rating con Label'
};

RatingReadOnly.story = {
  name: 'Rating read-only'
};
