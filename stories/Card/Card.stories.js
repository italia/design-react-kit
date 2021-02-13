import React from 'react'

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
  Row,
  Col,
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

export default {
  title: 'Componenti/Cards'
}

export const _SimpleCard = SimpleCardComponent

export const SimpleCardInMultipleColumns = SimpleCardMultipleColumnsComponent

SimpleCardInMultipleColumns.story = {
  name: 'Simple Card in multiple columns'
}

export const _SimpleArticle = SimpleArticleComponent

export const SimpleArticleWithIcon = SimpleArticleDateIconComponent

SimpleArticleWithIcon.story = {
  name: 'Simple Article with Icon'
}

export const CardWithIcon = CardIconComponent

CardWithIcon.story = {
  name: 'Card with icon'
}

export const CardWithShading = CardShadingComponent

CardWithShading.story = {
  name: 'Card with shading'
}

export const _BigCard = BigCardComponent

_BigCard.story = {
  name: 'Big card'
}

export const BigCardWithTag = BigCardTagComponent

BigCardWithTag.story = {
  name: 'Big card with tag'
}

export const CardWithImage = CardImageComponent

CardWithImage.story = {
  name: 'Card with image'
}

export const SpecialCards = SpecialCardComponent

SpecialCards.story = {
  name: 'Special cards'
}

export const _EsempiInterattivi = ({ space, teaser, link, title, text }) => {
  return (
    <Row>
      <Col size={12} lg={6}>
        {/* Start card */}
        <Card space={space} teaser={teaser}>
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>{text}</CardText>
            <CardReadMore
              iconName="it-arrow-right"
              text="Leggi di più"
              tag={'a'}
              href={link}
            />
          </CardBody>
        </Card>
        {/* end card */}
      </Col>
    </Row>
  )
}

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}
_EsempiInterattivi.args = {
  space: false,
  teaser: false,
  link: '#',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
