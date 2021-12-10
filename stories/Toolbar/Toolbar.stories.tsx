import React from 'react';

import { Toolbar, ToolbarItem, ToolbarDividerItem } from '../../src';

export const Esempio = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
    </Toolbar>
  </div>
);

export const EsempioMedium = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar size={'medium'}>
      <ToolbarItem srText='messaggi' iconName='it-comment' />
      <ToolbarItem srText='immagini' iconName='it-camera' />
      <ToolbarItem srText='documenti' iconName='it-file' />
    </Toolbar>
  </div>
);

export const EsempioSmall = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar size={'small'}>
      <ToolbarItem srText='messaggi' iconName='it-comment' />
      <ToolbarItem srText='immagini' iconName='it-camera' />
      <ToolbarItem srText='documenti' iconName='it-file' />
    </Toolbar>
  </div>
);

export const EsempioWithDivider = () => (
  <div style={{ maxWidth: 400 }}>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' />
      <ToolbarDividerItem />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarDividerItem />
      <ToolbarItem label='documenti' iconName='it-file' />
    </Toolbar>
  </div>
);

export default {
  title: 'Componenti/Toolbar'
};
