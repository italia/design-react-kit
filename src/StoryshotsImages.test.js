// File is located here in order to avoid a custom jest.config.js
// Current config is inherited from react-scripts
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const storybookUrl = `file:///${process.cwd()}/storybook-static`;

// https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagegobackoptions
const getGotoOptions = () => ({
  waitUntil: 'load',
});

initStoryshots({
  suite: 'Image Storyshots',
  test: imageSnapshot({ storybookUrl, getGotoOptions }),
});
