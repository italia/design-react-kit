import React from "react";
import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { default as theme } from './theme.js';

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/docs.min.css";
import "../assets/css/fonts.css";

addParameters({
    options: {
        name: 'Design React Kit',
        url: 'https://github.com/italia/design-react-kit',
        theme: theme,
        showPanel: true,
        panelPosition: 'right',
    },
    readme:{
        StoryPreview: ({ children }) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '32px 0',
                border: '2px dashed #eee',
                // boxShadow: '5px 5px 10px #ddd',
                padding: '16px',
              }}
            >
              <div>{children}</div>
            </div>
          ),
    },
});
addDecorator(addReadme);

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
