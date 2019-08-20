// File is located here in order to avoid a custom jest.config.js
// Current config is inherited from react-scripts
import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots'

initStoryshots({
  test: multiSnapshotWithOptions({})
})
