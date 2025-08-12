import { Meta } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: "Documentazione/Utilities/Colori",
};

export default meta;

export const ColoriTesto = () => (
  <>
    <p className='p-3 mb-2 text-primary'>.text-primary</p>
    <p className='p-3 mb-2 text-secondary'>.text-secondary</p>
    <p className='p-3 mb-2 text-success'>.text-success</p>
    <p className='p-3 mb-2 text-danger'>.text-danger</p>
    <p className='p-3 mb-2 text-warning'>.text-warning</p>
    <p className='p-3 mb-2 text-muted'>.text-muted</p>
    <p className='p-3 mb-2 text-white bg-dark'>.text-white</p>
  </>
);

export const ColoriSfondo = () => (
  <>
    <div className='p-3 mb-2 bg-primary text-white'>.bg-primary</div>
    <div className='p-3 mb-2 bg-secondary text-white'>.bg-secondary</div>
    <div className='p-3 mb-2 bg-success text-white'>.bg-success</div>
    <div className='p-3 mb-2 bg-danger text-white'>.bg-danger</div>
    <div className='p-3 mb-2 bg-warning text-white'>.bg-warning</div>
    <div className='p-3 mb-2 bg-white text-dark'>.bg-white</div>
  </>
);