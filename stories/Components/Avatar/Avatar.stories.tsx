import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef } from 'react';
import { AvatarContainer, AvatarExtraText, AvatarIcon, AvatarWrapper, Icon, UncontrolledTooltip } from '../../../src';

const meta: Meta<typeof AvatarContainer> = {
  title: 'Documentazione/Componenti/Avatar',
  component: AvatarIcon,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'green', 'orange', 'red']
    }
  }
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AvatarWithImageWithHooks = (args: any) => {
  return (
    <AvatarContainer>
      <AvatarIcon size={'lg'}>
        {args.results && args.results.length ? (
          <img
            src={args.results.at(0).picture.large}
            alt={`${args.results.at(0).name.last} ${args.results.at(0).name.first}`}
          />
        ) : null}
      </AvatarIcon>
    </AvatarContainer>
  );
};

export const AvatarWithImage: Story = {
  loaders: [
    async () => ({
      fakeUser: await (await fetch('https://randomuser.me/api')).json() //https://randomuser.me/documentation#howto
    })
  ],
  render: (args, { loaded: { fakeUser } }) => <AvatarWithImageWithHooks {...args} {...fakeUser} />
};

export const AvatarWithText: Story = {
  render: () => (
    <AvatarContainer>
      <AvatarIcon size='xs'>
        <p aria-hidden='true'>M</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon color='primary' size='sm'>
        <p aria-hidden='true'>M</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon color='secondary'>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon color='green' size='lg'>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon color='orange' size='xl'>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon color='red' size='xxl'>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
    </AvatarContainer>
  )
};

export const AvatarWithIcon: Story = {
  render: () => (
    <AvatarContainer>
      <AvatarIcon size='xs'>
        <Icon icon='it-search' />
      </AvatarIcon>
      <AvatarIcon size='sm'>
        <Icon icon='it-search' />
      </AvatarIcon>
      <AvatarIcon>
        <Icon icon='it-search' />
      </AvatarIcon>
      <AvatarIcon size='lg'>
        <Icon icon='it-search' />
      </AvatarIcon>
      <AvatarIcon size='xl'>
        <Icon icon='it-search' />
      </AvatarIcon>
      <AvatarIcon size='xxl'>
        <Icon icon='it-search' />
      </AvatarIcon>
    </AvatarContainer>
  )
};

export const AvatarLink: Story = {
  render: () => (
    <AvatarContainer>
      <AvatarIcon size='xl' href='#'>
        <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri'></img>
      </AvatarIcon>
      <AvatarIcon size='xl' color='red' href='#'>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon size='xl'>
        <Icon icon='it-search' onClick={() => console.log('Click')} />
      </AvatarIcon>
    </AvatarContainer>
  )
};

const AvatarLinkWithTooltipWithHooks = () => {
  const withImageRef = useRef(null);
  const withTextRef = useRef(null);
  const withIconRef = useRef(null);

  return (
    <AvatarContainer>
      <AvatarIcon size='xl' href='#' innerRef={withImageRef}>
        <UncontrolledTooltip placement='left' target={withImageRef}>
          Anna Barbieri
          <br />
          <i>Administrator</i>
        </UncontrolledTooltip>
        <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri'></img>
      </AvatarIcon>
      <AvatarIcon size='xl' color='red' href='#' innerRef={withTextRef}>
        <UncontrolledTooltip placement='top' target={withTextRef}>
          Mario Rossi
          <br />
          <i>Editor</i>
        </UncontrolledTooltip>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon size='xl' href='#' innerRef={withIconRef}>
        <Icon icon='it-search' />
        <UncontrolledTooltip placement='right' target={withIconRef}>
          Search
          <br />
          <i>News Archive</i>
        </UncontrolledTooltip>
      </AvatarIcon>
    </AvatarContainer>
  );
};

export const AvatarLinkWithTooltip: Story = {
  render: () => <AvatarLinkWithTooltipWithHooks></AvatarLinkWithTooltipWithHooks>,
  parameters: {
    docs: {
      canvas: { sourceState: 'none' }
    }
  }
};

export const AvatarWithAdditionalText: Story = {
  render: () => (
    <AvatarContainer>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='Mario Rossi' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Mario Rossi</a>
          </h4>
          <time dateTime='2018-09-15'>15 Set 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/women/33.jpg' alt='Guilia Neri' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>Guilia Neri</h4>
          <p>Lorem ipsum dolor</p>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/men/15.jpg' alt='Michele Dotti' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Micehele Dotti</a>
          </h4>
          <time dateTime='2018-09-15'>15 Mag 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
    </AvatarContainer>
  )
};
