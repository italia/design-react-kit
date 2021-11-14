import React from 'react';

import { Toolbar, ToolbarItem } from '../../src';

export const Esempio = () => (
  <Toolbar>
    <ToolbarItem label='messaggi' />
    <ToolbarItem label='immagini' iconName='it-camera' />
    <ToolbarItem label='documenti' iconName='it-file' />
  </Toolbar>
);

export const EsempioMedium = () => (
  <Toolbar isMedium>
    <ToolbarItem srText='messaggi' />
    <ToolbarItem srText='immagini' iconName='it-camera' />
    <ToolbarItem srText='documenti' iconName='it-file' />
  </Toolbar>
);

export const EsempioSmall = () => (
  <Toolbar isSmall>
    <ToolbarItem srText='messaggi' isIconSmall />
    <ToolbarItem srText='immagini' isIconSmall iconName='it-camera' />
    <ToolbarItem srText='documenti' isIconSmall iconName='it-file' />
  </Toolbar>
);

export default {
  title: 'Componenti/Toolbar'
};
