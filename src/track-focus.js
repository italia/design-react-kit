// Focus Management

/**
 * --------------------------------------------------------------------------
 * Bootstrap Italia (https://italia.github.io/bootstrap-italia/)
 * Authors: https://github.com/italia/bootstrap-italia/blob/main/AUTHORS
 * Licensed under BSD-3-Clause license (https://github.com/italia/bootstrap-italia/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const DATA_MOUSE_FOCUS = 'data-focus-mouse';
const CLASS_NAME_MOUSE_FOCUS = 'focus--mouse';

class TrackFocus {
  constructor() {
    this._usingMouse = false;

    this._bindEvents();
  }

  _bindEvents() {
    if (typeof document === 'undefined') {
      return;
    }
    const events = ['keydown', 'mousedown'];
    events.forEach((evtName) => {
      document.addEventListener(evtName, (evt) => {
        this._usingMouse = evt.type === 'mousedown';
      });
    });
    document.addEventListener('focusin', (evt) => {
      if (this._usingMouse) {
        if (evt.target) {
          evt.target.classList.add(CLASS_NAME_MOUSE_FOCUS);
          evt.target.setAttribute(DATA_MOUSE_FOCUS, 'true');
        }
      }
    });
    document.addEventListener('focusout', (evt) => {
      if (evt.target) {
        evt.target.classList.remove(CLASS_NAME_MOUSE_FOCUS);
        evt.target.setAttribute(DATA_MOUSE_FOCUS, 'false');
      }
    });
  }
}

new TrackFocus();
