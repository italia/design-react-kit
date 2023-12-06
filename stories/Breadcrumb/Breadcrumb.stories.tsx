/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import { Breadcrumb, BreadcrumbItem, Icon } from '../../src';

export default {
  title: 'Componenti/Breadcrumbs'
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
      <BreadcrumbItem active>Current section</BreadcrumbItem>
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
      <BreadcrumbItem active>Current section</BreadcrumbItem>
    </Breadcrumb>
  </section>
);

export const ConIcone = () => (
  <section>
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon className='align-top me-1' icon='it-link' color='secondary' aria-hidden size='sm' />
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon className='align-top me-1' icon='it-link' color='secondary' aria-hidden size='sm' />
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon className='align-top me-1' icon='it-link' color='secondary' aria-hidden size='sm' />
        Current section
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
      <BreadcrumbItem active>Current section</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb dark>
      <BreadcrumbItem>
        <Icon className='align-top me-1' icon='it-link' color='white' aria-hidden size='sm' />
        <a href='#'>Home</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon className='align-top me-1' icon='it-link' color='white' aria-hidden size='sm' />
        <a href='#'>Subsection</a>
        <span className='separator'>/</span>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icon className='align-top me-1' icon='it-link' color='white' aria-hidden size='sm' />
        Current section
      </BreadcrumbItem>
    </Breadcrumb>
  </section>
);

SuSfondoScuro.storyName = 'Su sfondo scuro';
