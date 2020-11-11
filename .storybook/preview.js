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

const priorityPages = ['welcome-page',  'organizzare', 'menu', 'componenti', 'form', 'utilities'];

export const parameters = {
    options: {
        storySort: (a, b) => {
            const [aGroups, aStory] = a[0].split('--');
            const [bGroups, bStory] = b[0].split('--');
            const [aSection, ...aSubSections] = aGroups.split('-');
            const [bSection, ...bSubSections] = bGroups.split('-');

            const aFullStoryName = `${aSubSections.join('-')}-${aStory}`
            const bFullStoryName = `${bSubSections.join('-')}-${bStory}`
            // Sort by Section 
            const sectionScore = (order[aSection] - order[bSection]);

          
            // if pages have custom sort, compare them only if from the same section
            if(!sectionScore){
              const pageAIndex = priorityPages.indexOf(aFullStoryName) + 1 || priorityPages.indexOf(aSubSections[0]) + 1;
              const pageBIndex = priorityPages.indexOf(bFullStoryName) + 1 || priorityPages.indexOf(bSubSections[0]) + 1;
              if(pageAIndex || pageBIndex){
                return pageAIndex - pageBIndex;
              }
            }

            // and lexycographic order of the story not mapped
            return sectionScore + (aFullStoryName.localeCompare(bFullStoryName))
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
