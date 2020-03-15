import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Rating } from '../../src'

import RatingBaseDoc from './docs/RatingBase.md'
import RatingConLabelDoc from './docs/RatingConLabel.md'
import RatingReadOnlyDoc from './docs/RatingReadOnly.md'

const RatingBase = () => {
  const legend = text('Label', 'Rating')
  const value = number('Valore (1-5)', null, { min: 1, max: 5, step: 1 })
  return (
    <Rating
      legend={legend}
      value={value}
      inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']}
      name="ratingA"
    />
  )
}

const RatingConLabel = () => (
  <Rating
    value={4}
    legend={
      <>
        <span className="sr-only">Valutazione</span> <span>4 stelle</span>{' '}
        <span className="sr-only">su 5</span>
      </>
    }
    inputs={['star1b', 'star2b', 'star3b', 'star4b', 'star5b']}
    name="ratingB"
  />
)

const RatingReadOnly = () => (
  <Rating
    value={4}
    readOnly
    legend={{ content: 'Valutazione 4 stelle su 5', srOnly: true }}
    inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']}
    name="ratingC"
  />
)

storiesOf('Componenti/Rating', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Rating Base',
    withInfo({
      text: RatingBaseDoc
    })(RatingBase)
  )
  .add(
    'Rating con Label',
    withInfo({
      text: RatingConLabelDoc
    })(RatingConLabel)
  )
  .add(
    'Rating read-only',
    withInfo({
      text: RatingReadOnlyDoc
    })(RatingReadOnly)
  )
