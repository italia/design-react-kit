import React, { FC } from 'react';
import classNames from 'classnames';

import {Splide, SplideProps} from '@splidejs/react-splide'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CONFIG_DEFAULT: any = {
  slideFocus: false,
  rewind: true,
  perMove: 1,
  i18n: {
    prev: 'Slide precedente',
    next: 'Slide successiva',
    first: 'Vai alla prima slide',
    last: 'Vai all’ultima slide',
    slideX: 'Vai alla slide %s',
    pageX: 'Vai a pagina %s',
    play: 'Attiva autoplay',
    pause: 'Pausa autoplay',
    carousel: 'Carosello',
    select: 'Seleziona una slide da mostrare',
    slide: 'slide',
    slideLabel: '%s di %s',
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CONFIGS: any= {
  'landscape-three-cols': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
    },
  },
  'landscape-three-cols-arrows': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
      },
    },
  },
  'big-image': {
    type: 'loop',
    perPage: 1,
    gap: 48,
    padding: { left: 320, right: 320 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 160, right: 160 },
        arrows: false,
      },
    },
  },
  'standard-image': {
    type: 'loop',
    perPage: 3,
    gap: 24,
    padding: { left: 48, right: 48 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 48, right: 48 },
        arrows: false,
      },
    },
  },
  'landscape': {
    type: 'slide',
    perPage: 1,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
    },
  },
  'calendar-wrapper': {
    type: 'slide',
    perPage: 4,
    gap: 0,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      560: {
        perPage: 1,
        gap: 0,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
      768: {
        perPage: 2,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 3,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
    },
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EXTRA_CLASSES: any= {
  'landscape-three-cols': [
    'it-carousel-landscape-abstract-three-cols'
  ],
  'landscape-three-cols-arrows': [
    'it-carousel-landscape-abstract-three-cols-arrow-visible'
  ],
  'big-image': [
    'it-carousel-landscape-abstract-three-cols',
    'it-full-carousel',
    'it-big-img'
  ],
  'standard-image': [
    'it-carousel-landscape-abstract-three-cols',
    'it-full-carousel',
    'it-standard-image'
  ],
  'landscape': [
    'it-carousel-landscape-abstract'
  ],
  'calendar-wrapper': [
    'it-calendar-wrapper'
  ]
}

export interface CarouselProps extends SplideProps {
  type: string;
  children?: React.ReactNode;
}

// Splide wrapper
export const Carousel: FC<CarouselProps> = ({
  className = '',
  type,
  children,
  ...attributes
}) => {
  let conf = Object.assign({}, CONFIG_DEFAULT)
  if (['big-image', 'standard-image'].includes(type)){
    conf = Object.assign({}, conf, CONFIGS['landscape-three-cols'])
  }
  conf = Object.assign({}, conf, CONFIGS[type])
  return <Splide
    {...attributes}
    className={classNames('it-carousel-wrapper', className, ...EXTRA_CLASSES[type])}
    options={conf}>{children}</Splide>;
};
