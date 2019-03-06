import { addParameters, addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {default as theme} from './theme.js';

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/docs.min.css";
import "../assets/css/fonts.css";

addDecorator(
    withInfo()
);

addParameters({
    options: {
        name: 'Design React Kit',
        url: 'https://github.com/italia/design-react-kit',
        theme: theme,
    },
});

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
