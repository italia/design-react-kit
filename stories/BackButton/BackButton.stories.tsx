/* eslint-disable react/prop-types */
import React from 'react';

import { BackButton } from '../../src';

export default {
  title: 'Componenti/BackButton'
};

export const Esempi = () => {
  return (
    <>
      <div className='mb-2'>
        <BackButton color='primary' />{' '}
        <BackButton color='primary' direction='up' />{' '}
      </div>
      <div className='mb-2'>
        <BackButton color='primary' direction='up'>
          Torna su
        </BackButton>{' '}
        <BackButton color='primary'>Torna indietro</BackButton>{' '}
      </div>
      <div className='mb-2'>
        <BackButton color='link' direction='up' iconColor='primary'>
          Torna su
        </BackButton>{' '}
        <BackButton color='link' iconColor='primary'>
          Torna indietro
        </BackButton>{' '}
      </div>
    </>
  );
};
