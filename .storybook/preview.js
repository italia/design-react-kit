import React from 'react';
import {addDecorator} from '@storybook/react';
import {default as theme} from './theme.js';
import {FontLoader} from '../src';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import '../assets/css/fonts.css';
import '../assets/css/storybook-fixes.css';


const styles = {
    position: 'relative',
    boxSizing: 'border-box',
    margin: '0',
    padding: '48px 32px',
    textAlign: 'initial'
};
const WrapperDecorator = storyFn => <div style={styles}><FontLoader />{storyFn()}</div>;

const order = {
  'documentazione': 1,
  'templates': 100,
  'componenti': 1000,
};

export const parameters = {
    options: {
        storySort: (a, b) => {
            const [aSection, aStory] = a[0].split('-');
            const [bSection, bStory] = b[0].split('-');
            // Sort by Section and lexycographic order of the story inside
            return (order[aSection] - order[bSection]) + (aStory.localeCompare(bStory));
          },
        /**
         * where to show the addon panel
         * @type {('bottom'|'right')}
         */
        panelPosition: 'right',
        previewTabs: { 'storybook/docs/panel': { index: -1 } },
    },
    docs: {
        theme
      },
};


addDecorator(WrapperDecorator);
