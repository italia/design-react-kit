import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';
import { icons, preloadIcons } from '../src';

import './__mocks__/IntersectionObserverMock.ts';

// Preload all the icons
beforeAll(() => preloadIcons(icons));

initStoryshots({
  storyKindRegex: /^((?!.*?Documentazione).)*$/,
  // Use storyshoot only to get stories coverage
  // Chromatic will be used to spot stories diffs
  test: renderOnly
});
