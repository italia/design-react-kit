import { describe, expect, test } from '@jest/globals';
import { composeStories, type Meta, type StoryFn } from '@storybook/react';
import { act, render } from '@testing-library/react';
import * as glob from 'glob';
import path from 'path';
import './__mocks__/IntersectionObserverMock';
import './__mocks__/matchMedia';

console.log(document.scrollingElement);

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(`There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`);
  }
};

function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(path.join(__dirname, '..', 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'));

  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    const storyDir = path.dirname(filePath);
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '');

    return { filePath, storyFile, storyDir, componentName };
  });
}

describe('Stories Snapshots', () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;

    describe(title, () => {
      const stories = Object.entries(compose(storyFile)).map(([name, story]) => ({ name, story }));

      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`
        );
      }

      stories.forEach(({ name, story }) => {
        test(name, async () => {
          const mounted = render(story());
          await act(async () => {
            // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
            await new Promise((resolve) => setTimeout(resolve, 1));
          });
          expect(mounted.container).toMatchSnapshot();
        });
      });
    });
  });
});
