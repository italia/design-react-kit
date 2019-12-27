import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Breadcrumb, BreadcrumbItem, Icon } from '../../src'

import Esempi from './docs/Esempi.md'
import Icone from './docs/Icone.md'
import Background from './docs/Background.md'

const EsempiComponent = () => (
  <section>
    <nav className="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">
            Home<span className="separator">/</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">
            Subsection<span className="separator">/</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="#">Current section</a>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>

    <nav className="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">
            Home<span className="separator">&gt;</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">
            Subsection<span className="separator">&gt;</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <a href="#">Current section</a>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  </section>
)

const IconeComponent = () => (
  <section>
    <nav className="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="secondary"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">
            Home<span className="separator">/</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="secondary"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">
            Subsection<span className="separator">/</span>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="secondary"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Current section</a>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  </section>
)

const BackgroundComponent = () => (
  <section>
    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Subsection</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>

    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Home</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Subsection</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>

    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Home</a>
          <span className="separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Subsection</a>
          <span className="separator">&gt;</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="white"
            style={{ ariaHidden: true }}
            size="sm"
          />
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>
  </section>
)

storiesOf('Componenti/Breadcrumb', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Con icone',
    withInfo({
      text: Icone
    })(IconeComponent)
  )
  .add(
    'Su sfondo scuro',
    withInfo({
      text: Background
    })(BackgroundComponent)
  )
