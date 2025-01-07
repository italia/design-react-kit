import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Video } from '../../src';

const meta: Meta<typeof Video> = {
  title: 'Documentazione/Componenti/Video',
  component: Video,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Video>;

const EsempiVideo = () => {
  return (
    <div className='bd-example tooltip-demo'>
      <Video label="boh"></Video>
    </div>
  );
};

export const Esempi: Story = {
  render: () => <EsempiVideo />
};

