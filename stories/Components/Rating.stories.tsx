import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../../src';

const meta: Meta<typeof Rating> = {
  title: "Documentazione/Componenti/Rating",
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingBase: Story = {
  render: ({ legend }) => {
    return (
      <Rating
        value={2}
        legend={legend}
        inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']}
        name='ratingA'
      />
    );
  },
  args: {
    legend: 'Rating'
  },
  argTypes: {
    legend: {
      control: { type: 'text' }
    }
  }
};

const RatingConLabelWithHooks = () => {
  const [rating, setRating] = useState(4);
  return (
    <Rating
      value={rating}
      legend={
        <>
          <span className='visually-hidden'>Valutazione</span> <span>{rating} stelle</span>
          <span className='visually-hidden'>su 5</span>
        </>
      }
      inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}
      name='ratingB'
      onChangeRating={setRating}
    />
  );
};

export const RatingConLabel: Story = {
  render: () => <RatingConLabelWithHooks/>,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

export const RatingReadOnly: Story = {
  render: () => (
    <Rating
      value={4}
      readOnly
      legend={{ content: 'Valutazione 4 stelle su 5', srOnly: true }}
      inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
      name='ratingC'
    />
  )
};
