import React from 'react'

import { Breadcrumb, BreadcrumbItem, Icon } from '../../src'

export default {
  title: 'Componenti/Breadcrumb'
}

export const Esempi = () => (
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

export const ConIcone = () => (
  <section>
    <nav className="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Icon
            className="align-top mr-1"
            icon="it-star-outline"
            color="secondary"
            aria-hidden
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
            aria-hidden
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
            aria-hidden
            size="sm"
          />
          <a href="#">Current section</a>
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
  </section>
)

ConIcone.story = {
  name: 'Con icone'
}

export const SuSfondoScuro = () => (
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
            aria-hidden
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
            aria-hidden
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
            aria-hidden
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
            aria-hidden
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
            aria-hidden
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
            aria-hidden
            size="sm"
          />
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>
  </section>
)

SuSfondoScuro.story = {
  name: 'Su sfondo scuro'
}
