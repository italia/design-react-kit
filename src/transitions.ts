// Taken from Reactstrap utils.js which are tken from bootstrap sass
export const TransitionTimeouts = {
  // $transition-fade
  Fade: 150,
  // $transition-collapse
  Collapse: 350,
  // $modal-transition
  Modal: 300,
  // $carousel-transition
  Carousel: 600
};

// taken from Reactstrap utils.js
export const TransitionsKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited'
];

const transitionStatus = {
  entering: 1,
  entered: 1,
  exiting: 1,
  exited: 1
};

export type TransitionStates = keyof typeof transitionStatus;
