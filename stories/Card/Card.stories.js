import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Card, Button } from '../../src'

import SimpleCard from './docs/SimpleCard.md'
import SimpleArticle from './docs/SimpleArticle.md'
import CardIcon from './docs/CardIcon.md'
import CardShading from './docs/CardShading.md'
import BigCard from './docs/BigCard.md'
import BigCardTag from './docs/BigCardTag.md'
import CardImage from './docs/CardImage.md'
import SpecialCard from './docs/SpecialCard.md'
import EsempiInterattivi from '../Button/docs/EsempiInterattivi.md'

const SimpleCardComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-4'>
      {/* start card */}
      <Card
        link='#'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
      {/* end card */}
    </div>
  </div>
)

const SimpleArticleComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* start card */}
      <Card
        isArticleCard
        articleCategoryName='Category Name'
        articleCategoryLink='#'
        articleDate='10/12/2018'
        link='#'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.'
        signature='di Federico De Paolis'
      />

      {/* end card */}
    </div>
  </div>
)

const CardIconComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card isIconCard
        iconName='it-file'
        articleCategoryName='Category name'
        title=' Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor…'
        text=' Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.'
      />

      {/* end card */}
    </div>
  </div>
)

const CardShadingComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card
        hasSpace
        hasShade
        link='#'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.'
      />

      {/* end card */}
    </div>
  </div>
)

const BigCardComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-8'>
      {/* Start card */}
      <Card
        isBig
        iconName='it-card'
        link='#'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.'
      />
      {/* end card */}
    </div>
  </div>
)
const BigCardTagComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card
        isBig
        hasCTA
        tags='Tag 1, Tag 2'
        articleDate='10/12/2018'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.'
        signature='di Federico De Paolis'
      />
      {/* end card */}
    </div>
  </div>
)

const CardImageComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card
        link='#'
        imageSrc='https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO'
        imageTitle='img title'
        imageAlt='img alt'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
      />
      {/* end card */}
    </div>
  </div>
)

const SpecialCardComponent = () => (
  <div className='row'>
    <div className='col-12 col-lg-6'>
      {/* Start card */}
      <Card
        isSpecialCard
        imageSrc='https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO'
        imageTitle='img title'
        imageAlt='img alt'
        articleDate='10/12/2018'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
      />
      {/* end card */}
    </div>
  </div>
)

const EsempiInterattiviComponent = () => {
  const isSpecialCardOption = boolean('Speciale', false)
  const hasShadeOption = boolean('Ombreggiatura', false)
  const hasLinkOnTitleOption = boolean('Link su titolo', false)
  const linkOption = text('Link', '#')
  const titleOption = text('Titolo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…')
  const textOption = text('Testo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

  return (
    <div className='row'>
      <div className='col-12 col-lg-6'>
        {/* Start card */}
        <Card
          isSpecialCard={isSpecialCardOption}
          imageSrc={isSpecialCardOption ? 'https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO' : false}
          imageTitle={isSpecialCardOption ? 'img title' : false}
          imageAlt={isSpecialCardOption ? 'img alt' : false}
          link={linkOption}
          hasShade={hasShadeOption}
          hasLinkOnTitle={hasLinkOnTitleOption}
          title={titleOption}
          text={textOption}
        />
        {/* end card */}
      </div>
    </div>
  )
}

storiesOf('Componenti/Cards', module)
  .addDecorator(withA11y)
  .add(
    'Simple Card',
    withInfo({
      text: SimpleCard,
      propTables: [Card],
      propTablesExclude: [Button]
    })(SimpleCardComponent)
  )
  .add(
    'Simple Article',
    withInfo({
      text: SimpleArticle,
      propTables: [Card]
    })(SimpleArticleComponent)
  )
  .add(
    'Card with icon',
    withInfo({
      text: CardIcon,
      propTables: [Card]
    })(CardIconComponent)
  )
  .add(
    'Card with shading',
    withInfo({
      text: CardShading,
      propTables: [Card],
      propTablesExclude: [Button]
    })(CardShadingComponent)
  )
  .add(
    'Big card',
    withInfo({
      text: BigCard,
      propTables: [Card]
    })(BigCardComponent)
  )
  .add(
    'Big card with tag',
    withInfo({
      text: BigCardTag,
      propTables: [Card]
    })(BigCardTagComponent)
  )
  .add(
    'Card with image',
    withInfo({
      text: CardImage,
      propTables: [Card]
    })(CardImageComponent)
  )
  .add(
    'Special cards',
    withInfo({
      text: SpecialCard,
      propTables: [Card]
    })(SpecialCardComponent)
  )

storiesOf('Componenti/Cards', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )
