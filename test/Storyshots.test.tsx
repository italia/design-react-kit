import initStoryshots from '@storybook/addon-storyshots';
import { icons, preloadIcons } from '../src';

// Preload all the icons
beforeAll(() => preloadIcons(icons));

initStoryshots({
  storyKindRegex: /^((?!.*?Documentazione).)*$/
});
