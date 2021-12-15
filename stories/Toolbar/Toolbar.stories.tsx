import React from 'react';

import { Toolbar, ToolbarItem, ToolbarDividerItem } from '../../src';

export const Esempio = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioMedium = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar size={'medium'}>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioSmall = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar size={'small'}>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' />
      <ToolbarItem label='downloads' iconName='it-download' disabled />
    </Toolbar>
  </div>
);

export const EsempioWithDivider = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarDividerItem />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarDividerItem />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export default {
  title: 'Componenti/Toolbar'
};
