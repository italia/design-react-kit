import initStoryshots from '@storybook/addon-storyshots';
import { icons, preloadIcons } from '../src';

import './__mocks__/IntersectionObserverMock';

// Preload all the icons
beforeAll(() => preloadIcons(icons));

initStoryshots({
  storyKindRegex: /^((?!.*?Documentazione).)*$/
});
