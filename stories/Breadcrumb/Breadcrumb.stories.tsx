/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import { Breadcrumb, BreadcrumbItem, Icon } from '../../src';

export default {
  title: 'Componenti/Breadcrumb'
};

export const Esempi = () => (
  <section>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <a href='#'>Current section</a>
      </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb>
      <BreadcrumbItem>
        <a href='#'>Home</a>
        <span className='separator'>&gt;</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href='#'>Subsection</a>
        <span className='separator'>&gt;</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <a href='#'>Current section</a>
      </BreadcrumbItem>
    </Breadcrumb>
  </section>
);

export const ConIcone = () => (
  <section>
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='secondary'
          aria-hidden
          size='sm'
        />
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='secondary'
          aria-hidden
          size='sm'
        />
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='secondary'
          aria-hidden
          size='sm'
        />
        <a href='#'>Current section</a>
      </BreadcrumbItem>
    </Breadcrumb>
  </section>
);

ConIcone.storyName = 'Con icone';

export const SuSfondoScuro = () => (
  <section>
    <Breadcrumb dark>
      <BreadcrumbItem>
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <a href='#'>Current section</a>
      </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb dark>
      <BreadcrumbItem>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='white'
          aria-hidden
          size='sm'
        />
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='white'
          aria-hidden
          size='sm'
        />
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon
          className='align-top mr-1'
          icon='it-star-outline'
          color='white'
          aria-hidden
          size='sm'
        />
        <a href='#'>Current section</a>
      </BreadcrumbItem>
    </Breadcrumb>
  </section>
);

SuSfondoScuro.storyName = 'Su sfondo scuro';
