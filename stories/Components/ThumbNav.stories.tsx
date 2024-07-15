import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ThumbNav, ThumbNavItem, ThumbNavProps } from '../../src';

const meta: Meta<typeof ThumbNav> = {
  title: "Documentazione/Menu di navigazione/ThumbNav",
  component: ThumbNav
};

export default meta;

type Story = StoryObj<typeof ThumbNav>;

export const Esempio: Story = {
  render: () => (
    <ThumbNav>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const EsempioSmall: Story = {
  render: () => (
    <ThumbNav isSmall>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const EsempioNoZoom: Story = {
  render: () => (
    <ThumbNav noZoomOnHover>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const EsempioBlackLayer: Story = {
  render: () => (
    <ThumbNav overlayOnHover='black'>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const EsempioPrimaryLayer: Story = {
  render: () => (
    <ThumbNav overlayOnHover='primary'>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const EsempioVerticale: Story = {
  render: () => (
    <ThumbNav isVertical>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
    </ThumbNav>
  )
};

export const Overlay: Story = {
  render: ({ position }: ThumbNavProps) => (
    <div className='position-relative'>
      <img src='https://picsum.photos/1280/720?image=1050' className='test-image' alt='Amazing landscape' />
      <ThumbNav isSmall position={position}>
        <ThumbNavItem
          targetUrl='#'
          imageUrl='https://picsum.photos/480/320?image=1044'
          actionDescription='Visualizza immagine 1'
        />
        <ThumbNavItem
          active
          targetUrl='#'
          imageUrl='https://picsum.photos/480/320?image=1050'
          actionDescription='Visualizza immagine 2'
        />
        <ThumbNavItem
          targetUrl='#'
          imageUrl='https://picsum.photos/480/320?image=1037'
          actionDescription='Visualizza immagine 3'
        />
        <ThumbNavItem
          targetUrl='#'
          imageUrl='https://picsum.photos/480/320?image=1040'
          actionDescription='Visualizza immagine 4'
        />
      </ThumbNav>
    </div>
  ),
  args: {
    position: 'bottom'
  },
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['left', 'bottom', 'right', 'top']
      }
    }
  }
}

export const OverlayTop = {
  ...Overlay,
  args: {
    position: 'top'
  }
};

export const OverlayLeft = {
  ...Overlay,
  args: {
    position: 'left'
  }
};

export const OverlayRight = {
  ...Overlay,
  args: {
    position: 'right'
  }
};

export const EsempioFixed: Story = {
  render: () => (
    <ThumbNav fixedWidth>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1040'
        actionDescription='Visualizza immagine 4'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1055'
        actionDescription='Visualizza immagine 5'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1057'
        actionDescription='Visualizza immagine 6'
      />
    </ThumbNav>
  )
};

export const EsempioAutoWidth: Story = {
  render: ({ rowItems }: ThumbNavProps) => (
    <ThumbNav rowItems={rowItems}>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1040'
        actionDescription='Visualizza immagine 4'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1055'
        actionDescription='Visualizza immagine 5'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1057'
        actionDescription='Visualizza immagine 6'
      />
    </ThumbNav>
  ),
  args: {
    rowItems: 3
  },
  argTypes: {
    rowItems: {
      control: {
        type: 'select',
        options: [2, 3, 4, 5]
      }
    }
  }
};


export const EsempioAutoWidthFive = {
  ...EsempioAutoWidth,
  args: {
    rowItems: 5
  }
}
