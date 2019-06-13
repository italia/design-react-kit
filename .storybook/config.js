import React from "react";
import { addParameters, addDecorator, configure } from '@storybook/react';
import { default as theme } from './theme.js';

import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/docs.min.css";
import "../assets/css/fonts.css";

const styles = {
                    position: "relative",
                    boxSizing: "border-box",
                    margin: "0 0 0 0",
                    padding: "50px 35px",
                    border: "1.5px dashed #e5e5e5",
                    backgroundColor: "#ffffff",
                    transition: "background-color 0.2s",
                    textAlign: "initial"
  };
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

addParameters({
    options: {
        name: 'Design React Kit',
        url: 'https://github.com/italia/design-react-kit',
        theme: theme,
        hierarchySeparator: /\/|\./,
        hierarchyRootSeparator: '/',

    },
});

addDecorator(CenterDecorator);
function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
