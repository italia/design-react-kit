import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardCategory,
  CardSignature,
  CardReadMore,
  Icon,
  CardTagsHeader
} from '../../src'

import SimpleCard from './docs/SimpleCard.md'
import SimpleCardMultipleColumns from './docs/SimpleCardMultipleColumns.md'
import SimpleArticle from './docs/SimpleArticle.md'
import CardIcon from './docs/CardIcon.md'
import CardShading from './docs/CardShading.md'
import BigCard from './docs/BigCard.md'
import BigCardTag from './docs/BigCardTag.md'
import CardImage from './docs/CardImage.md'
import SpecialCard from './docs/SpecialCard.md'
import EsempiInterattivi from '../Button/docs/EsempiInterattivi.md'

const SimpleCardComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-4">
      {/* start card */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const SimpleCardMultipleColumnsComponent = () => (
  <div className="row">
    {[1, 2, 3].map(i => (
      <div className="col-12 col-lg-4" key={i}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor…
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
      </div>
    ))}
  </div>
)

const SimpleArticleComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* start card */}
      <Card>
        <CardBody>
          <CardCategory date="10/12/2018">Category</CardCategory>
          <CardTitle tag="h5" className="big-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardSignature>di Federico De Paolis</CardSignature>
          <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const SimpleArticleDateIconComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* start card */}
      <Card>
        <CardBody>
          <CardCategory date="10/12/2018" iconName="it-calendar">
            Category
          </CardCategory>
          <CardTitle tag="h5" className="big-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardSignature>di Federico De Paolis</CardSignature>
          <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const CardIconComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* Start card */}
      <Card>
        <CardBody>
          <CardCategory iconName="it-file">
            <span className="text">
              Category
              <br />
              Name
            </span>
          </CardCategory>
          <a href="#">
            <CardTitle tag="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor…
            </CardTitle>
          </a>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
        </CardBody>
      </Card>

      {/* end card */}
    </div>
  </div>
)

const CardShadingComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* Start card */}
      <Card space className="card-bg">
        <CardBody>
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName="it-arrow-right" text="Leggi di più" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const BigCardComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-8">
      {/* Start card */}
      <Card space className="card-bg card-big">
        <CardBody>
          <div className="top-icon">
            <Icon icon="it-card" />
          </div>
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName="it-arrow-right" text="Leggi di più" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)
const BigCardTagComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* Start card */}
      <Card space className="card-bg card-big border-bottom-card">
        <div className="flag-icon"></div>
        <div className="etichetta">
          <Icon icon="it-settings" />
          <span>Sviluppo</span>
        </div>
        <CardBody>
          <div className="top-icon">
            <Icon icon="it-card" />
          </div>
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <CardReadMore iconName="it-arrow-right" text="Leggi di più" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const CardImageComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* Start card */}
      <Card className="card-bg card-img no-after">
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">
              <img
                src="https://via.placeholder.com/310x94/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO"
                title="img title"
                alt="imagealt"
              />
            </figure>
            <div className="card-calendar d-flex flex-column justify-content-center">
              <span className="card-date">31</span>
              <span className="card-day">novembre</span>
            </div>
          </div>
        </div>
        <CardBody>
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
          <CardReadMore iconName="it-arrow-right" text="Leggi di più" />
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const SpecialCardComponent = () => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/* Start card */}
      <Card className="card-img no-after special-card" tag="a">
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img
                src="https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO"
                title="img title"
                alt="imagealt"
              />
            </figure>
            <div className="card-calendar d-flex flex-column justify-content-center">
              <span className="card-date">31</span>
              <span className="card-day">novembre</span>
            </div>
          </div>
        </div>
        <CardBody>
          <CardTagsHeader date="10/10/2018" />
          <CardTitle tag="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor…
          </CardTitle>
        </CardBody>
      </Card>
      {/* end card */}
    </div>
  </div>
)

const EsempiInterattiviComponent = () => {
  const hasSpace = boolean('Extra mobile spacing', false)
  const isTeaser = boolean('Card Anteprima', false)
  const linkOption = text('Link', '#')
  const titleOption = text(
    'Titolo',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
  )
  const textOption = text(
    'Testo',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        {/* Start card */}
        <Card space={hasSpace} teaser={isTeaser}>
          <CardBody>
            <CardTitle tag="h5">{titleOption}</CardTitle>
            <CardText>{textOption}</CardText>
            <CardReadMore
              iconName="it-arrow-right"
              text="Leggi di più"
              tag={'a'}
              href={linkOption}
            />
          </CardBody>
        </Card>
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
    'Simple Card in multiple columns',
    withInfo({
      text: SimpleCardMultipleColumns,
      propTables: [Card],
      propTablesExclude: [Button]
    })(SimpleCardMultipleColumnsComponent)
  )
  .add(
    'Simple Article',
    withInfo({
      text: SimpleArticle,
      propTables: [Card]
    })(SimpleArticleComponent)
  )
  .add(
    'Simple Article with Icon',
    withInfo({
      text: SimpleArticle,
      propTables: [Card, CardCategory]
    })(SimpleArticleDateIconComponent)
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
