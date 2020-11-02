import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import Examples from './Example';
import NotificationWithMessage from './NotificationWithMessage';
import dismissable from './dismissable';
import states from './States';
import RoundingOfCorners from './RoundingOfCorners';
import defaultLocation from './defaultLocation';
import fixedPosition from './FixedPosition';

import Example from './docs/Example.md';
import NotificationWithMessageText from './docs/NotificationWithMessage.md';
import dismissableText from './docs/dismissable.md';
import stateText from './docs/States.md';
import RoundingText from './docs/Rounding.md';
import defaultLocationText from './docs/DefaultLocation.md';
import fixedPositionText from './docs/FixedPosition.md';

export default {
  title: 'Componenti/Notification',
  decorators: [withA11y],
};

export const _Example = withInfo({
  text: Example,
})(Examples);

export const _NotificationWithMessage = withInfo({
  text: NotificationWithMessageText,
})(NotificationWithMessage);

_NotificationWithMessage.story = {
  name: 'Notification with message',
};

export const Dismissable = withInfo({
  text: dismissableText,
})(dismissable);

export const States = withInfo({
  text: stateText,
})(states);

export const _RoundingOfCorners = withInfo({
  text: RoundingText,
})(RoundingOfCorners);

_RoundingOfCorners.story = {
  name: 'Rounding of Corners',
};

export const DefaultLocation = withInfo({
  text: defaultLocationText,
})(defaultLocation);

export const FixedPositions = withInfo({
  text: fixedPositionText,
})(fixedPosition);
