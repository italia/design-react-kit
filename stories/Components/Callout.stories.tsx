import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Callout, CalloutMoreFooter, CalloutText, CalloutTitle, Icon } from '../../src';

const meta: Meta<typeof Callout> = {
  title: 'Documentazione/Componenti/Callout',
  component: Callout,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const EsempioBasico: Story = {
  render: () => (
    <Callout>
      <CalloutTitle>
        <span className='text'>Titolo Callout</span>
      </CalloutTitle>
      <CalloutText>
        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean non augue non purus vestibulum varius.
      </CalloutText>
    </Callout>
  )
};

export const EsempioConIcona: Story = {
  render: () => (
    <Callout>
      <CalloutTitle>
        <Icon icon='it-info-circle' padding={false} aria-hidden />
        <span className='visually-hidden'>Confermato</span>
        <span className='text'>Titolo Callout</span>
      </CalloutTitle>
      <CalloutText>
        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean non augue non purus vestibulum varius.
      </CalloutText>
    </Callout>
  )
};

export const EsempioAccessibilita: Story = {
  render: () => (
    <Callout>
      <CalloutTitle>
        <Icon icon='it-check-circle' padding={false} aria-hidden />
        <span className='visually-hidden'>Confermato</span>
        <span className='text'>Titolo Callout</span>
      </CalloutTitle>
      <CalloutText>
        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean non augue non purus vestibulum varius.
      </CalloutText>
    </Callout>
  )
};

export const CalloutVariantiColore = {
  render: ({ ...args }) => (
    <Callout color={args.color}>
      <CalloutTitle>
        <Icon icon={`it-${args.icon}-circle`} padding={false} aria-hidden />
        <span className='text'>{args.title}</span>
      </CalloutTitle>
      <CalloutText>
        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean non augue non purus vestibulum varius.
      </CalloutText>
    </Callout>
  ),
  parameters: {
    docs: {
      controls: {
        exclude: ['title', 'className', 'tag', 'title', 'highlight', 'detailed', 'testId']
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon al cambio del colore
   */
  args: {
    color: 'success',
    icon: 'check',
    title: 'Usa'
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['success', 'warning', 'danger', 'note', 'important']
    },
    icon: {
      control: 'radio',
      options: ['check', 'help', 'close', 'info']
    }
  }
};

export const CalloutHighlights = {
  render: ({ ...args }) => (
    <Callout highlight color={args.color}>
      <CalloutTitle>
        <Icon icon={`it-${args.icon}-circle`} padding={false} aria-hidden />
        {args.title}
      </CalloutTitle>
      <CalloutText>
        Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut
        sed ex. In sed dignissim elit.
      </CalloutText>
      <CalloutText>
        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href='#'>tincidunt nulla quis laoreet.</a>
      </CalloutText>
    </Callout>
  ),
  parameters: {
    docs: {
      controls: {
        exclude: ['title', 'className', 'tag', 'title', 'highlight', 'detailed', 'testId']
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon e il titolo al cambio del colore
   */
  args: {
    color: 'success',
    icon: 'check',
    title: 'Titolo'
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['success', 'warning', 'danger', 'note', 'important']
    },
    icon: {
      control: 'radio',
      options: ['check', 'help', 'close', 'info']
    }
  }
};

export const CalloutApprofondimento = {
  render: () => (
    <Callout color='note' detailed>
      <CalloutTitle>
        <Icon icon='it-zoom-in' padding={false} aria-hidden />
        <span>Approfondimento</span>
      </CalloutTitle>
      <CalloutText>
        Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
        malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
        rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.
      </CalloutText>
      <CalloutText>
        Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
        molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
        interdum magna, eu commodo odio mauris semper dolor.
      </CalloutText>
      <CalloutText>
        Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}
        <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper
        tincidunt nulla quis laoreet.
      </CalloutText>
      <CalloutMoreFooter id='example' fileUrl='#'>
        <p>
          Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices
          lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui
          purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem
          vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales
          nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros,
          pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum
          scelerisque magna nec malesuada.
        </p>
        <p>
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        </p>
        <p>
          Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}
          <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
          ullamcorper tincidunt nulla quis laoreet.
        </p>
      </CalloutMoreFooter>
    </Callout>
  )
};
