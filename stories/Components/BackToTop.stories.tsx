import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackToTop } from '../../src';

const meta: Meta<typeof BackToTop> = {
  title: 'Documentazione/Menu di navigazione/BackToTop',
  component: BackToTop
};

export default meta;

type Story = StoryObj<typeof BackToTop>;

export const Esempio: Story = {
  render: () => <BackToTop />
};

export const Small: Story = {
  render: (args) => <BackToTop {...args} />,
  args: {
    small: true
  }
};

export const Shadow: Story = {
  render: () => (
    <div className='d-flex align-items-center'>
      <BackToTop shadow />
      <BackToTop shadow small />
    </div>
  )
};

export const Dark: Story = {
  render: () => (
    <div className='d-flex align-items-center'>
      <BackToTop dark />
      <BackToTop dark small />
    </div>
  )
};

export const DarkShadow: Story = {
  render: () => (
    <div className='d-flex align-items-center'>
      <BackToTop dark shadow />
      <BackToTop dark shadow small />
    </div>
  )
};
