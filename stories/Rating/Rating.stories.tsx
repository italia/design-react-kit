import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { Rating } from '../../src';

interface RatingProps {
  value: any;
  legend: any;
}

export const RatingBase: Story<RatingProps> = ({ value, legend }) => {
  return (
    <Rating value={value} legend={legend} inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']} name='ratingA' />
  );
};

export const RatingConLabel = () => {
  const [rating, setRating] = useState(4);
  return (
    <Rating
      value={rating}
      legend={
        <>
          <span className='visually-hidden'>Valutazione</span> <span>{rating} stelle</span>{' '}
          <span className='visually-hidden'>su 5</span>
        </>
      }
      inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}
      name='ratingB'
      onChangeRating={setRating}
    />
  );
};

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
  value: 0,
  legend: 'Rating'
};
RatingBase.argTypes = {
  value: {
    control: {
      type: 'range',
      min: 0,
      max: 5,
      step: 1
    }
  },
  legend: {
    control: { type: 'text' }
  }
};

RatingConLabel.storyName = 'Rating con Label';

RatingReadOnly.storyName = 'Rating read-only';
