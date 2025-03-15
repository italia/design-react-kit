import React from 'react';
import {SplideSlide} from '@splidejs/react-splide'

// Splide wrapper
export const CarouselSlide: React.FC<JSX.IntrinsicElements['li']> = ({
  children,
}) => {

  return <SplideSlide>
    <div className='it-single-slide-wrapper'>
      {children}
    </div>
  </SplideSlide>;
};
