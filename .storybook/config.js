import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import '@storybook/addon-actions/register';
import '@storybook/addon-console';
import '../src/index.css';
import './utils.css';

// Get all files inside `components` directory which ends with `.story.js`
const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(story => <div className="c-hideFocus">{story()}</div>);
configure(loadStories, module);
