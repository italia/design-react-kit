import React from 'react'

import { ThumbNav, ThumbNavItem } from '../../src'

const EsempioComponent = () => (
  <ThumbNav overlayOnHover="black" rowItems={4}>
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1044"
      actionDescription="Visualizza immagine 1"
    />
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1050"
      actionDescription="Visualizza immagine 2"
    />
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1037"
      actionDescription="Visualizza immagine 3"
    />
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1040"
      actionDescription="Visualizza immagine 4"
    />
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1055"
      actionDescription="Visualizza immagine 5"
    />
    <ThumbNavItem
      targetUrl="#"
      imageUrl="https://picsum.photos/480/320?image=1057"
      actionDescription="Visualizza immagine 6"
    />
  </ThumbNav>
)

const OverlayComponent = () => (
  <div className="test-gallery position-relative">
    <img
      src="https://picsum.photos/1280/720?image=1050"
      className="test-image"
      alt="Amazing landscape"
    />
    <ThumbNav isSmall isVertical position="left">
      <ThumbNavItem
        targetUrl="#"
        imageUrl="https://picsum.photos/480/320?image=1044"
        actionDescription="Visualizza immagine 1"
      />
      <ThumbNavItem
        active
        targetUrl="#"
        imageUrl="https://picsum.photos/480/320?image=1050"
        actionDescription="Visualizza immagine 2"
      />
      <ThumbNavItem
        targetUrl="#"
        imageUrl="https://picsum.photos/480/320?image=1037"
        actionDescription="Visualizza immagine 3"
      />
      <ThumbNavItem
        targetUrl="#"
        imageUrl="https://picsum.photos/480/320?image=1040"
        actionDescription="Visualizza immagine 4"
      />
    </ThumbNav>
  </div>
)

export default {
  title: 'Componenti/ThumbNav'
}

export const _Esempio = EsempioComponent

export const _Overlay = OverlayComponent
