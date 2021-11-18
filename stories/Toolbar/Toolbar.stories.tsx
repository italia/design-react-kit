import React from 'react';

import { Toolbar, ToolbarItem } from '../../src';

export const Esempio = () => (
  <Toolbar>
    <ToolbarItem label='messaggi' iconName='it-comment' />
    <ToolbarItem label='immagini' iconName='it-camera' />
    <ToolbarItem label='documenti' iconName='it-file' />
  </Toolbar>
);

export const EsempioMedium = () => (
  <Toolbar size={'medium'}>
    <ToolbarItem srText='messaggi' iconName='it-comment' />
    <ToolbarItem srText='immagini' iconName='it-camera' />
    <ToolbarItem srText='documenti' iconName='it-file' />
  </Toolbar>
);

export const EsempioSmall = () => (
  <Toolbar size={'small'}>
    <ToolbarItem srText='messaggi' iconName='it-comment' />
    <ToolbarItem srText='immagini' iconName='it-camera' />
    <ToolbarItem srText='documenti' iconName='it-file' />
  </Toolbar>
);

export default {
  title: 'Componenti/Toolbar'
};
