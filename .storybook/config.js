import React from 'react';
import {addParameters, addDecorator, configure} from '@storybook/react';
import {default as theme} from './theme.js';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import '../assets/docs.min.css';
import '../assets/css/fonts.css';
import '../assets/css/select-styles.css';

const styles = {
    position: 'relative',
    boxSizing: 'border-box',
    margin: '0',
    padding: '48px 32px',
    textAlign: 'initial'
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

addParameters({
    options: {
        /**
         * display panel that shows a list of stories
         * @type {Boolean}
         */
        showNav: true,
        /**
         * display panel that shows addon configurations
         * @type {Boolean}
         */
        showPanel: true,
        /**
         * where to show the addon panel
         * @type {('bottom'|'right')}
         */
        panelPosition: 'bottom',
        /**
         * regex for finding the hierarchy root separator
         * @example:
         *   null - turn off multiple hierarchy roots
         *   /\|/ - split by `|`
         * @type {Regex}
         */
        hierarchyRootSeparator: /\//,
        /**
         * theme storybook, see link below
         */
        theme: theme,
    },
});

addDecorator(CenterDecorator);

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
